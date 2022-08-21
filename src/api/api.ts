import axios, {AxiosResponse} from 'axios';
import {UsersFollowResponseType, UsersResponseType} from "../redux/users-reducer";
import {LoginResponseType} from "../redux/auth-reducer";
import {ProfileType} from "../redux/profile-reducer";

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
    },
    savePhotoSuccess (photo: File) {
        const formData = new FormData();
        formData.append('image', photo)
        return instance.put<SavePhotoResponseType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile (profileData: ProfileType) {
        return instance.put<SaveProfileResponseType>('profile', profileData)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email: string, password: string, rememberMe: boolean, captcha: string | null) {
        return instance.post<LoginResponseType>('auth/login', {email, password, rememberMe, captcha});
    },
    logout() {
        return instance.delete('auth/login');
    }
}

export const securityAPI = {
    getCaptcha() {
        return instance.get('security/get-captcha-url', {
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}

export type SavePhotoResponseType = {
    resultCode: number
    messages: Array<string>
    data: {
        small: string
        large: string
    }
}
export type SaveProfileResponseType = {
    resultCode: number
    messages: Array<string>
    data: ProfileType
}