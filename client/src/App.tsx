import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Layout from './hoc/Layout/Layout'

import AuthStore from './store/auth'
import { observer } from 'mobx-react-lite'

import CabinetPage from './pages/CabinetPage/CabinetPage'
import CartPage from './pages/CartPage/CartPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import HelpPage from './pages/HelpPage/HelpPage'
import MainPage from './pages/MainPage/MainPage'
import MakeOrderPage from './pages/MakeOrderPage/MakeOrderPage'
import OrderListPage from './pages/OrderListPage/OrderListPage'
import PrivacyPage from './pages/PrivacyPage/PrivacyPage'
import TermsPage from './pages/TermsPage/TermsPage'

function App() {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      AuthStore.checkAuth()
    }
  }, [])

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route exact path='/cart' component={CartPage} />
          <Route exact path='/order' component={MakeOrderPage} />
          <Route exact path='/help' component={HelpPage} />
          <Route exact path='/terms' component={TermsPage} />
          <Route exact path='/privacy' component={PrivacyPage} />
          <Route exact path='/menu' component={MainPage} />
          <Route exact path='/my' component={CabinetPage} />
          <Route exact path='/orderlist' component={OrderListPage} />
          <Route path='/menu/:category' component={CategoryPage} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default observer(App)
