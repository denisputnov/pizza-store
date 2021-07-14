import React from 'react'
import OrderService from '../../../services/orderService'
import ProductDisplayService from '../../../services/ProductDisplayService'
import { IOrder } from '../../../types/response/IOrder'
import { ICartProduct } from '../../../types/store/ICartProduct'
import classes from './Order.module.css'

interface IProps extends IOrder {
  saveClosedOrderId: any
}

function Order({_id, name, phone, address, commentary, order, closed, saveClosedOrderId}: IProps) {
  const cart = JSON.parse(order)

  const closeOrder = async () => {
    await OrderService.closeOrder(_id)
    saveClosedOrderId(_id)
  } 

  return (
    <div className={classes.Order} data-closed={closed}>
      <table>
        <thead>
          <tr>
            <th scope="col">Название</th>
            <th scope="col">Размер</th>
            <th scope="col">Количество</th>
            <th scope="col">Цена</th>
            <th scope="col">Цена упаковки</th>
            <th scope="col">Общая цена</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map((item: ICartProduct) => (
              <tr key={item._cartHash}>
                <td><strong>{item.name}</strong></td>
                <td>
                  {item.showAdditional 
                    ? `${item.size} / ${item.isHalf ? "Половина" : "Целая"}`
                    : ''}
                </td>
                <td>{item.count}</td>
                <td>
                  {item.showAdditional
                    ? ProductDisplayService.calculatePrice(item.price, item.size, item.isHalf)
                    : item.price}
                </td>
                <td>{item.packagePrice}</td>
                <td>
                  {item.showAdditional
                    ? (ProductDisplayService.calculatePrice(item.price, item.size, item.isHalf) + item.packagePrice) * item.count
                    : (item.price + item.packagePrice) * item.count}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className={classes.CustomerAndControlls}>
        <div className={classes.CustomerInfo}>
          <div>
            <p><strong>Имя: </strong>{name}</p>
            <p><strong>Адрес: </strong>{address}</p>
            <p><strong>Телефон: </strong>{phone}</p>
          </div>
          <p><strong>Комментарий:</strong><br/>{commentary}</p>
        </div>
        {!closed && <button className={classes.CloseOrder} onClick={closeOrder}/> }
      </div>
    </div>
  )
}

export default Order
