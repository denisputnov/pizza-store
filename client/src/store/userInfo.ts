import { makeAutoObservable } from 'mobx'
import { IUserInfo } from "../types/store/IUserInfo"

class UserInfo {
  data: IUserInfo = {
    name: '',
    phone: '',
    address: '',
    commentary: '',
  }

  constructor() {
    if (localStorage.getItem('userInfo')) {    
      this.data = JSON.parse(localStorage.getItem('userInfo') || '')
    }
    makeAutoObservable(this)
  }

  setName(name: string) {
    this.data.name = name
    this.save()
  }

  setPhone(phone: string) {
    this.data.phone = phone
    this.save()
  }

  setAddress(address: string) {
    this.data.address = address
    this.save()
  }

  setCommentary(commentary: string) {
    this.data.commentary = commentary
    this.save()
  }

  get name() {
    return this.data.name
  }

  get phone() {
    return this.data.phone
  }

  get address() {
    return this.data.address
  }

  get commentary() {
    return this.data.commentary
  }

  get summary() {
    return Object.assign({}, this.data)
  }

  save() {
    localStorage.setItem('userInfo', JSON.stringify(this.data))
    this.log()
  }

  log() {
    console.table([this.data.name, this.data.phone, this.data.address, this.data.commentary]);
  }
}

export default new UserInfo()