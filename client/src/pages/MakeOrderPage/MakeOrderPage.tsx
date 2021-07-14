import React from 'react'
import ContentContainer from '../../hoc/ContentContainer/ContentContainer'

import useQuery from '../../hooks/useQuery'

import { observer } from 'mobx-react-lite'
import userInfo from '../../store/userInfo'

import OrderDisplayService from '../../services/orderDisplayService'

import classes from './MakeOrderPage.module.css'
import OrderService from '../../services/orderService'
import { useHistory } from 'react-router-dom'

const MakeOrderPage = observer(() => {
  const query = useQuery()
  const history = useHistory()
  const isPickup = query.get('mode') === 'pickup' 

  const setName = (event: any) => {
    userInfo.setName(event.target.value)
    if (!OrderDisplayService.validateName(event.target.value)) {
      event.target.classList.add(classes.Invalid)
    } else {
      event.target.classList.remove(classes.Invalid)
    }
  }  

  const setPhone = (event: any) => {
    const digitPattern = new RegExp(/^\d*$/)
    if (!digitPattern.test(event.target.value.replaceAll(/ |\+|\(|\)|-/g, ''))) return
    if (!OrderDisplayService.validatePhone(event.target.value)) {
      event.target.classList.add(classes.Invalid)
    } else {
      event.target.classList.remove(classes.Invalid)
    }
    userInfo.setPhone(OrderDisplayService.formatPhone(event.target.value.replaceAll(/ |\(|\)|-/g, '')))
  }

  const setAddress = (event: any) => {
    userInfo.setAddress(event.target.value)
    if (!OrderDisplayService.validateAddress(event.target.value)) {
      event.target.classList.add(classes.Invalid)
    } else {
      event.target.classList.remove(classes.Invalid)
    }
  }

  const submit = async (e: any) => {
    e.preventDefault()
    e.target.disabled = true
    const order = OrderService.buildOrder(isPickup)
    const response = await OrderService.makeOrder(order)
    history.push({
      pathname: "/",
      state: {
        message: response.status === 201 ? "Заказ успешно оформлен" : "Что-то пошло не так. Повторите заказ позже."
      }
    })
  }
  
  return (
    <ContentContainer>
      <form className={classes.MakeOrderForm} onSubmit={submit}>
        <label htmlFor="name">Имя <mark>*</mark></label>
        <input 
          required 
          type="text"
          id="name" 
          className={!OrderDisplayService.validateName(userInfo.name) ? classes.Invalid : ''}
          placeholder="Имя"
          value={userInfo.name} 
          onChange={setName}
          minLength={2}
        />
        <p className={classes.Example}>Иван Иванов</p>

        <label htmlFor="phone">Номер телефона <mark>*</mark></label>
        <input 
          required 
          type="tel" 
          id="phone"
          className={!OrderDisplayService.validatePhone(userInfo.phone) ? classes.Invalid : ''}
          placeholder="Номер телефона" 
          value={userInfo.phone} 
          onChange={setPhone}

        />
        <p className={classes.Example}>+7 (987) 654-32-10</p>

        <label htmlFor="address">Адрес <mark>*</mark></label>
        <input 
          required 
          type="text" 
          id="address" 
          className={!OrderDisplayService.validateAddress(userInfo.address) ? classes.Invalid : ''}
          placeholder="Адрес доставки"
          disabled={isPickup}
          value={isPickup ? "Самовывоз" : userInfo.address} 
          onChange={setAddress} 
          minLength={5}
        />
        <p className={classes.Example}>{!isPickup && "ул. Ленина, дом 114, кв. 18"}</p>

        <label htmlFor="commentary">Комментарий</label>
        <input 
          type="text" 
          id="commentary" 
          placeholder="Комментарий к заказу"
          value={userInfo.commentary} 
          onChange={e => userInfo.setCommentary(e.target.value)}
        />

        <button type="submit">Сделать заказ</button>
      </form>
    </ContentContainer>
  )
})

export default MakeOrderPage
