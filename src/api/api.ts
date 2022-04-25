import axios, {AxiosResponse} from 'axios';
import {UsersFollowResponseType, UsersResponseType} from "../redux/users-reducer";


const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "73ec80e8-a879-4389-884b-c8ca6798760f"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: AxiosResponse<UsersResponseType>) => {
                return response.data;
            })
    },
    showProfile (id: number) {
        return instance.get(`profile/${id}`)
    },
    followUsers (id: number) {
        return instance.post(`follow/${id}`)
            .then((response: AxiosResponse<UsersFollowResponseType>) => {
                return response.data;
            })
    },
    unFollowUsers (id: number) {
        return instance.delete(`follow/${id}`)
            .then((response: AxiosResponse<UsersFollowResponseType>) => {
                return response.data;
            })
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}