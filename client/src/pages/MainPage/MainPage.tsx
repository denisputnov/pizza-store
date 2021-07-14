import React, { useState, useEffect } from 'react'

import Map from '../../components/Map/Map'
import CategoryCard from '../../components/CategoryCard/CategoryCard'
import CardsGrid from '../../hoc/CardsGrid/CardsGrid'
import ContentContainer from '../../hoc/ContentContainer/ContentContainer'

import ProductService from '../../services/productService'

import { ICategory } from '../../types/response/ICategory'
import InfoMessage from '../../components/InfoMessage/InfoMessage'
import { useLocation } from 'react-router-dom'

interface ILocationState {
  message: string
}

function MainPage() {
  const [categories, setCategories] = useState<ICategory[]>([])
  const location = useLocation<ILocationState>()
  const showInfo = !!location?.state?.message

  useEffect(() => {
    const fetchData = async () => {
      const categoriesList = await ProductService.getAllCategories().then(response => response.data)      
      setCategories(categoriesList)
    }
    fetchData()
  }, [])
  
  return (
    <ContentContainer>
      {showInfo && <InfoMessage text={location?.state?.message} /> }
      <CardsGrid>
        {categories.map(category => <CategoryCard key={category._id} {...category} /> )}
      </CardsGrid>
      <Map/>
    </ContentContainer>
  )
}

export default MainPage
