import axios, {AxiosResponse} from 'axios';
import {UsersFollowResponseType, UsersResponseType} from "../redux/users-reducer";
import {LoginResponseType} from "../redux/auth-reducer";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        "API-KEY": "344e1d93-75ad-4579-8284-aae71a3ea37e"
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
        console.warn('Obsolete method. Please use profileAPI object')
        return profileAPI.showProfile(id)
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

export const profileAPI = {
    showProfile (id: number) {
        return instance.get(`profile/${id}`)
    },
    getStatus (userId: number) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe: false});
    },
    logout() {
        return instance.delete('auth/login');
    }
}