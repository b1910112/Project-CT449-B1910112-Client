import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;   // Tắt các thông báo sản xuất trong console

new Vue({
  router,   // Sử dụng router đã được định nghĩa
  vuetify,   // Sử dụng plugin Vuetify để thiết kế giao diện
  render: h => h(App)   // Render component App trong template của index.html
}).$mount('#app');   // Mount ứng dụng vào phần tử có id là 'app' trong index.html
