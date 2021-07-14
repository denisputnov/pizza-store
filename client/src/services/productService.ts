import $api from "../http/index";
import { AxiosResponse } from 'axios';
import { ICategory } from "../types/response/ICategory";
import { IProduct } from "../types/response/IProduct";

export default class ProductService {
  static async getAllCategories(): Promise<AxiosResponse<ICategory[]>> {
    return $api.get<ICategory[]>('/api/categories')
  }

  static async getProducts(categoryUrl: string): Promise<AxiosResponse<IProduct[]>> {
    return $api.get<IProduct[]>(`/api/products/${categoryUrl}`)
  }
}

