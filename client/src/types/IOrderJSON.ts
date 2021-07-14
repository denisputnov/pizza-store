import { ICartProduct } from "./store/ICartProduct";

export interface IOrderJSON {
  name: string
  address: string
  phone: string
  commentary?: string
  order: ICartProduct[]
}