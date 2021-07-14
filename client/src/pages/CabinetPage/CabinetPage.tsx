import React from 'react'
import { observer } from 'mobx-react-lite'
import ContentContainer from '../../hoc/ContentContainer/ContentContainer'
import AuthStore from '../../store/auth'
import LoginForm from './LoginForm/LoginForm'
import CabinetContent from './CabinetContent/CabinetContent'

function CabinetPage() {
  console.log(AuthStore.user.email);
  
  return (
    <ContentContainer>
      {AuthStore.isAuth 
        ? <CabinetContent />
        : <LoginForm /> }
    </ContentContainer>
  )
}

export default observer(CabinetPage)