import React, { useEffect, useState } from 'react'
import ContentContainer from '../../hoc/ContentContainer/ContentContainer'
import OrderService from '../../services/orderService'
import { IOrder } from '../../types/response/IOrder'
import Order from './Order/Order'
import classes from './OrderListPage.module.css'
import AuthStore from '../../store/auth'
import { observer } from 'mobx-react-lite'

function OrderListPage() {
  const [orders, setOrders] = useState<IOrder[]>([] as IOrder[])
  const [closedOrderId, setClosedOrderId] = useState<string>('')
  const [activeTab, setActiveTab] = useState<"closed"| "opened" | "all">("opened")

  const fetchData = async () => {
    const ordersList = await OrderService.getOrders().then(response => response.data)      
    setOrders(ordersList)
  }

  useEffect(() => {
    const interval = setInterval(() => fetchData(), 30000);
    fetchData()
    return () => {
      clearInterval(interval)
    }
  }, [closedOrderId])

  

  const getFilteredData = () => {
    if (activeTab === 'closed') {
      return orders.filter(item => item.closed === true)
    }
    if (activeTab === 'opened') {
      return orders.filter(item => item.closed === false)
    }
    return orders
  }

  const handleTabClick = (e: any) => setActiveTab(e.target.value)

  return (
    <ContentContainer className={classes.OrderList}>
      <div className={classes.Tabs}>
        <button className={activeTab === "opened" ? classes.Active : ''} value="opened" onClick={handleTabClick}>Открытые</button>
        <button className={activeTab === "closed" ? classes.Active : ''} value="closed" onClick={handleTabClick}>Закрытые</button>
        <button className={activeTab === "all" ? classes.Active : ''}    value="all"    onClick={handleTabClick}>Все</button>
      </div>
      {AuthStore.user.isAdmin 
        ? getFilteredData().length 
          ? getFilteredData().map(order => <Order key={order._id} {...order} saveClosedOrderId={setClosedOrderId}/>) 
          : <h1>Заказов нет</h1>
        : <h1>Недостаточно прав для просмотра контента</h1>}
    </ContentContainer>
  )
}

export default observer(OrderListPage)