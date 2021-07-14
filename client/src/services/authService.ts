import $api from "../http/index";
import { AxiosResponse } from 'axios';
import { IAuthResponse } from "../types/response/IAuthResponse";


export default class AuthService {
  static async login(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/auth/login', { email, password })
  }

  static async registration(email: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/auth/registration', { email, password })
  }

  static async logout(): Promise<void> {
    return $api.post('/auth/logout')
  }
}

