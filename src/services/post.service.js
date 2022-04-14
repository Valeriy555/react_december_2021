import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postService = {
    getAllPost: () => axiosService.get(urls.post),
    getByIdPost:(id) => axiosService.get(`${urls.posts}/${id}`)
}

export {postService}