import userInfo from "../store/userInfo"
import cart from "../store/cart"
import { IOrderJSON } from "../types/IOrderJSON"
import { AxiosResponse } from "axios"
import $api from "../http/index"
import { IOrder } from "../types/response/IOrder"


export default class OrderService {
  static async makeOrder(order: IOrderJSON): Promise<AxiosResponse<IOrder>> {
    return $api.post<IOrder>('/api/order', order)
  }

  static async getOrders(): Promise<AxiosResponse<IOrder[]>> {
    return $api.get<IOrder[]>(`/api/orders`)
  }

  static async closeOrder(_id: string): Promise<AxiosResponse<IOrder>> {
    return $api.put<IOrder>(`/api/order`, { _id } )
  }

  static buildOrder(isPickup: boolean) {
    const {name, phone, address, commentary} = userInfo.summary
    const order = cart.summary    
    
    return {
      name, 
      phone,
      address: isPickup ? "Самовывоз" : address,
      commentary,
      order
    } as IOrderJSON
  }
}