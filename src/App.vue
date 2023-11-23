<template>
  <v-app id="inspire">
    <!-- Navigation Drawer -->
    <v-navigation-drawer v-model="drawer" app class="nav-drawer">
      <!-- App Title -->
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="app-title">
            CTVN
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <!-- Navigation Links -->
      <v-list dense>
        <v-list-item-group color="primary">
          <!-- Loop through items and create navigation links -->
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.link" link class="nav-item">
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <!-- App Bar -->
    <v-app-bar app class="custom-app-bar">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Truyện Cổ Tích Việt Nam</v-app-bar-title>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <!-- Router View with Search Prop -->
      <router-view :search="search"></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,   // Biến để điều khiển trạng thái mở/đóng của Navigation Drawer
    search: '',   // Biến để theo dõi giá trị của ô tìm kiếm
    items: [
      { title: 'Home', icon: 'mdi-home', link: "/" },   // Các mục trong Navigation Drawer
      { title: 'Publish Story', icon: 'mdi-note-plus', link: "/add-post" },
      { title: 'About', icon: 'mdi-help', link: "../about" },
    ],
  }),
};
</script>
