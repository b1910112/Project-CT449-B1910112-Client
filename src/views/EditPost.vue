<template>
  <v-container>
      <!-- Form chỉnh sửa bài đăng -->
      <v-row no-gutters>
          <v-col sm="10" class="mx-auto">
              <v-card class="pa-5">
                  <v-card-title>Edit this Post</v-card-title>
                  <v-divider></v-divider>

                  <!-- Form sử dụng Vuetify -->
                  <v-form ref="form" @submit.prevent="updateForm" class="pa-5" enctype="multipart/form-data">
                      <!-- Ô nhập tiêu đề -->
                      <v-text-field label="Title" v-model="post.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>

                      <!-- Ô nhập danh mục -->
                      <v-text-field label="Category" v-model="post.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>

                      <!-- Ô nhập nội dung -->
                      <v-textarea label="Content" v-model="post.content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>

                      <!-- Chọn file ảnh -->
                      <v-file-input @change="selectFile" show-size counter multiple label="Select Image"></v-file-input>

                      <!-- Hiển thị hình ảnh đã chọn -->
                      <v-img :src="`/${post.image}`" width="120"></v-img>

                      <!-- Nút cập nhật -->
                      <v-btn type="submit" class="mt-3" color="success"> Cập nhật</v-btn>
                  </v-form>

              </v-card>
          </v-col>
      </v-row>
  </v-container>
</template>

<script>
import API from '../api';

export default {
data() {
  return {
    rules: [(value) => !!value || 'This field is required!'],
    post: {
      title: "",
      category: "",
      content: "",
      image: "",
    },
    image: "",
  };
},
async created(){
  // Lấy thông tin bài đăng dựa trên ID khi component được tạo
  const response = await API.getPostByID(this.$route.params.id);
  this.post = response;
},
methods: {
  // Xử lý sự kiện khi người dùng chọn file
  selectFile(file) {
      this.image = file[0];
  },

  // Hàm cập nhật bài đăng
  async updateForm() {
      // Tạo FormData để chứa dữ liệu cập nhật
      const formData = new FormData();
      formData.append('image', this.image);
      formData.append('title', this.post.title);
      formData.append('category', this.post.category);
      formData.append('content', this.post.content);
      formData.append('old_image', this.post.image);

      // Kiểm tra các điều kiện trước khi gửi yêu cầu cập nhật
      if(this.$refs.form.validate()){
          // Gọi API để cập nhật bài đăng và điều hướng đến trang chính với thông báo
          const response = await API.updatePost(this.$route.params.id, formData);
          this.$router.push({ name: "home", params: { message: response.message } });
      }
  },
},
};
</script>
