import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_URL } from "../http/index";
import { IUser } from "../types/IUser";
import { IAuthResponse } from "../types/response/IAuthResponse";
import AuthService from './../services/authService'

class AuthStore {
  user: IUser = {} as IUser
  isAuth: boolean = false 
  loading: boolean = false 
  errorMessage: string = ''

  constructor() {
    makeAutoObservable(this)
  }

  setAuth(bool: boolean) {
    this.isAuth = bool
  }

  setUser(user: IUser) {
    this.user = user
  }
  
  setLoading(bool: boolean) {
    this.loading = bool
  }

  setErrorMessage(text: string) {
    this.errorMessage = text
  }

  async login(email: string, password: string) {
    try {
      const response = await AuthService.login(email, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
      this.setErrorMessage('')
    } catch (e: any) {
      console.log(e?.response?.data?.message)
      this.setErrorMessage(e?.response?.data?.message)
    }
  }

  async registration(email: string, password: string) {
    try {
      const response = await AuthService.registration(email, password)
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
      this.setErrorMessage('')
    } catch (e: any) {
      console.log(e?.response?.data?.message)
      this.setErrorMessage(e?.response?.data?.message)
    }
  }

  async logout() {
    try {
      await AuthService.logout()
      localStorage.removeItem('token')
      this.setAuth(false)
      this.setUser({} as IUser)
    } catch (e: any) {
      console.log(e?.response?.data?.message)
    }
  }

  async checkAuth() {
    try {
      this.setLoading(true)
      const response = await axios.get<IAuthResponse>(`${API_URL}/auth/refresh`, {withCredentials: true})
      localStorage.setItem('token', response.data.accessToken)
      this.setAuth(true)
      this.setUser(response.data.user)
    } catch (e: any) {
      console.log(e?.response?.data?.message)
    } finally {
      this.setLoading(false)
    }
  }
}

export default new AuthStore()