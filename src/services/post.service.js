import {axiosService} from "./axios.service";
import {urls} from "../configs";

const postService = {
    getAllPost: () => axiosService.get(urls.posts),
    getByIdPost: (id) => axiosService.get(`${urls.posts}/${id}`),
    getByPostComments: (id) => axiosService.get(`${urls.posts}/${id}/comments`).then(value => value.data)
}

export {postService}