import React from 'react'
import { IHOCProps } from '../../types/IHOCProps'
import Footer from './Footer/Footer'
import Header from './Header/Header'

function Layout({children}: IHOCProps) {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout