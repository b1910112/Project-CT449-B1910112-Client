<template>
    <v-container>
        <v-row no-gutters>
            <v-col sm="10" class="pa-4 mx-auto">
                <v-card class="pa-2">
                    <!-- Hình ảnh của bài đăng -->
                    <v-img :src="`/${post.image}`"></v-img>

                    <!-- Thông tin tác giả và các nút điều hướng -->
                    <v-card-actions class="pb-0">
                        <v-row class="mt-1 mx-1">
                            <v-col sm="2">
                                <!-- Hiển thị tên tác giả -->
                                <v-btn small outline color="primary"><h4>Tác giả:</h4>  {{ post.category }}</v-btn>
                            </v-col>
                            <v-col sm="10" class="d-flex justify-end">
                                <!-- Nút điều hướng đến trang chỉnh sửa và nút xóa -->
                                <v-btn color="success" :to="{ name: 'edit-post', params: {id : post._id} }">Chỉnh sửa</v-btn>
                                <v-btn color="red" text @click="removePost(post._id)">Xóa</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>

                    <!-- Tiêu đề của bài đăng -->
                    <v-card-subtitle class="headline">
                        <h3>{{ post.title }}</h3>
                    </v-card-subtitle>

                    <!-- Nội dung của bài đăng và ngày tạo -->
                    <v-card-text class="black--text">
                        <p>{{ post.content }}</p>
                        <p>{{ post.created }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import API from "../api";
export default {
    data() {
        return {
            post: {},
        };
    },
    async created() {
        // Khi component được tạo, lấy thông tin của bài đăng dựa trên ID từ API
        const response = await API.getPostByID(this.$route.params.id);
        this.post = response;
    },
    methods: {
        async removePost(id) {
            // Gọi API để xóa bài đăng và điều hướng đến trang chính với thông báo
            const response = await API.deletePost(id);
            this.$router.push({ name: "home", params: { message: response.message }})
        }
    }
};
</script>
