import React from 'react'
import ContentContainer from '../../hoc/ContentContainer/ContentContainer'
import classes from './HelpPage.module.css'

function HelpPage() {
  return (
    <ContentContainer className={classes.InfoWrapper}>
      <h1>Информация для покупателя</h1>
      <div className={classes.InfoTop}>
        <h3>г.Балашов, ул. Карла Маркса , д. 9</h3>
        <p className={classes.InfoPhone}>Телефон: <a href="tel:+79198209090">8-919-820-90-90</a></p>
      </div>
      <div className={classes.InfoGrid}>
        <div>
          <p>Время работы кафе</p>
          <ul>
            <li>с 10:00 до 22:00</li>
            <li>Без выходных и перерыва</li>
          </ul>
        </div>

        <div>
          <p>Самовывоз заказа</p>
          <ul>
            <li>по адресу ул. Карла Маркса, 9</li>
            <li>Время работы кафе: с 10:00 до 22:00</li>
            <li>Без выходных, без перерыва</li>
          </ul>
        </div>

        <div>
          <p>Доставка до двери курьером</p>
          <ul>
            <li>Доставка по Балашову - бесплатно.</li>
            <li>Минимальный заказ при доставке- 550 рублей</li>
            <li>График работы доставки: с 10:00 до 22:00</li>
            <li>Без выходных, без перерыва</li>
          </ul>
        </div>
  
        <div>
        <p>Оплата</p>
          <ul>
            <li>Онлайн оплата банковской картой</li>
            <li>Онлайн оплата Яндекс Деньгами</li>
            <li>Наличными курьеру</li>
            <li>Наличными при самовывозе</li>
            <li>Картой при самовывозе</li>
            <li>Безналичная оплата для юридических лиц</li>
          </ul>
        </div>
      </div>
    </ContentContainer>
  )
}

export default HelpPage