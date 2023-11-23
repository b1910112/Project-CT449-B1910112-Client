<template>
  <v-container>
    <!-- Hiển thị cảnh báo nếu có thông báo từ route -->
    <v-alert border-left close-text="Close Alert" color="green accent-4" dark dismissible v-if="$route.params.message">
      {{ $route.params.message }}
    </v-alert>

    <!-- Hiển thị danh sách bài đăng -->
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="post in posts" :key="post._id">
        <!-- Card cho mỗi bài đăng -->
        <v-card class="pa-1" :to="{ name: 'post', params: { id: post._id } }">
          <!-- Hình ảnh bài đăng -->
          <v-img height="200" :src="`/${post.image}`"></v-img>

          <!-- Nút hiển thị danh mục -->
          <v-btn class="ml-4 mt-3" small outlined color="indigo">
            {{ post.category }}
          </v-btn>

          <!-- Tiêu đề bài đăng -->
          <v-card-title class="headline">
            {{ post.title }}
          </v-card-title>

          <!-- Nội dung rút gọn của bài đăng -->
          <v-card-text class="py-0">
            <p> {{ post.content.substring(0, 100) + "..." }} </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import API from '../api';
export default {
  name: 'Home',
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    // Lấy danh sách bài đăng từ API khi component được tạo
    this.posts = await API.getAllPost();
  },
};
</script>
