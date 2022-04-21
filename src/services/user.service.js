import {axiosService} from "./axios.service";
import {urls} from "../configs";

const userService = {
    getAllUser: () => axiosService.get(urls.users),
    getByIdUser: (id) => axiosService.get(`${urls.users}/${id}`),
    getByUserPosts: (id) => axiosService.get(`${urls.users}/${id}/posts`).then(value => value.data)


}
export {userService}