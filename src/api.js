import axios from "axios";
const url = "/api/post";

export default class API {
    // Lấy tất cả bài đăng từ máy chủ
    static async getAllPost() {
        const res = await axios.get(url);
        return res.data;
    }

    // Lấy một bài đăng dựa trên ID
    static async getPostByID(id) {
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    // Thêm một bài đăng vào cơ sở dữ liệu
    static async addPost(post) {
        const res = await axios.post(url, post);
        return res.data;
    }

    // Cập nhật một bài đăng trong cơ sở dữ liệu
    static async updatePost(id, post) {
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }

    // Xóa một bài đăng
    static async deletePost(id) {
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
    }
}
