export interface IOrder {
  _id: string;
  name: string
  address: string
  phone: string
  commentary?: string
  order: string,
  date: number,
  closed: boolean
}