import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import CardsGrid from '../../hoc/CardsGrid/CardsGrid'
import ProductCard from '../../components/ProductCard/ProductCard'
import ProductService from '../../services/productService'
import { IProduct } from '../../types/response/IProduct'
import ContentContainer from '../../hoc/ContentContainer/ContentContainer'

function CategoryPage() {
  const { category } : { category: string } = useParams()
  const [products, setProducts] = useState<IProduct[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const products = await ProductService.getProducts(category).then(response => response.data)
      setProducts(products)
    }
    fetchData()
  }, [category])  

  return (
    <ContentContainer>
      <CardsGrid isModileSingle={true}>
        {products.map(product => <ProductCard key={product._id} {...product}/> )}
      </CardsGrid>
    </ContentContainer>
  )
}

export default CategoryPage