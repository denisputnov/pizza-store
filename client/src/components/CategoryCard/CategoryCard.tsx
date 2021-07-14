import React from 'react'
import classes from './CategoryCard.module.css'

import { Link } from 'react-router-dom'

interface ICategoryCardProps {
  name: string
  img: string 
  url: string
}

function CategoryCard({name, img, url}: ICategoryCardProps) {
  return (
    <Link to={`/menu/${url}`} className={classes.CategoryCard}>
      <div>
        <img src={img} alt={name}/>
      </div>
      <span className={classes.CategoryName}>{name}</span>
    </Link>
  )
}

export default CategoryCard
