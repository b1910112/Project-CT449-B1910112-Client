import Vue from 'vue';
import VueRouter from 'vue-router';
import AddPost from "../views/AddPost.vue";
import EditPost from "../views/EditPost.vue";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";

// Sử dụng VueRouter
Vue.use(VueRouter);

// Các routes của ứng dụng
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home, // Sử dụng component Home từ đường dẫn ../views/Home.vue
  },
  {
    path: '/add-post',
    name: 'add-post',
    component: AddPost, // Sử dụng component AddPost từ đường dẫn ../views/AddPost.vue
  },
  {
    path: '/edit-post/:id',
    name: 'edit-post',
    component: EditPost, // Sử dụng component EditPost từ đường dẫn ../views/EditPost.vue
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') // Dynamic import cho About
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post, // Sử dụng component Post từ đường dẫn ../views/Post.vue
  },
];

// Tạo router mới với các cấu hình
const router = new VueRouter({
  mode: 'history', // Sử dụng mode history để có URL đẹp
  base: process.env.BASE_URL,
  routes
});

// Xuất router để sử dụng trong ứng dụng Vue
export default router;
