<template>
  <!-- Form thêm mới truyện -->
  <v-container>
      <v-row no-gutters>
          <v-col sm="10" class="mx-auto">
              <v-card class="pa-5">
                  <v-card-title>Thêm Truyện Mới</v-card-title>
                  <v-divider></v-divider>

                  <!-- Form sử dụng Vuetify -->
                  <v-form ref="form" @submit.prevent="submitForm" class="pa-5" enctype="multipart/form-data">
                      <!-- Ô nhập tiêu đề truyện -->
                      <v-text-field label="Tiêu đề" v-model="post.title" prepend-icon="mdi-note" :rules="rules"></v-text-field>

                      <!-- Ô nhập tác giả -->
                      <v-text-field label="Tác giả" v-model="post.category" prepend-icon="mdi-view-list" :rules="rules"></v-text-field>

                      <!-- Ô nhập nội dung truyện -->
                      <v-textarea label="Nội dung truyện" v-model="post.content" prepend-icon="mdi-note-plus" :rules="rules"></v-textarea>

                      <!-- Chọn file ảnh -->
                      <v-file-input @change="selectFile" :rules="rules" show-size counter multiple label="Select Image"></v-file-input>

                      <!-- Nút thêm mới -->
                      <v-btn type="submit" class="mt-3" color="primary">Thêm mới</v-btn>
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
methods: {
  // Xử lý sự kiện khi người dùng chọn file
  selectFile(file) {
      this.image = file[0];
  },

  // Hàm gửi yêu cầu thêm mới bài đăng
  async submitForm() {
      // Tạo FormData để chứa dữ liệu thêm mới
      const formData = new FormData();
      formData.append('image', this.image);
      formData.append('title', this.post.title);
      formData.append('category', this.post.category);
      formData.append('content', this.post.content);

      // Kiểm tra các điều kiện trước khi gửi yêu cầu thêm mới
      if(this.$refs.form.validate()){
          // Gọi API để thêm mới bài đăng và điều hướng đến trang chính với thông báo
          const response = await API.addPost(formData);
          this.$router.push({ name: "home", params: { message: response.message } });
      }
  },
},
};
</script>
