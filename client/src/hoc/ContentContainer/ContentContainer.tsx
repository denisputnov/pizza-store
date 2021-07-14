import React from 'react'
import { IHOCProps } from '../../types/IHOCProps'
import classes from './ContentContainer.module.css'

function ContentContainer({ children, className }: IHOCProps) {
  return (
    <div className={[classes.ContentContainer, className].join(' ')}>
      {children}
    </div>
  )
}

export default ContentContainer
