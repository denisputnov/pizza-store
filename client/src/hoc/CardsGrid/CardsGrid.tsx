import React from 'react'
import { IHOCProps } from '../../types/IHOCProps'
import classes from './CardsGrid.module.css'

interface ICardsGridProps extends IHOCProps {
  isModileSingle?: boolean
}

function CardsGrid({children, isModileSingle} : ICardsGridProps) {
  return (
    <div className={[classes.CardsGrid, isModileSingle ? classes.MobileSingle : null].join(' ')}>
      {children}
    </div>
  )
}

export default CardsGrid
