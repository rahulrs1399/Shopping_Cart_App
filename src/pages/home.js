import React from 'react'
import { products } from '../Products'
import ProductCart from '../components/productCart'

const home = () => {
  return (
    <div>
      <h1 className=' text-3xl mb-5'>Products List</h1>
      <div className=' grid lg:grid-cols-4 md:grid-col-3 sm:grid-col-2 gap-5'>
        {
          products.map((product, key) => 
            <ProductCart key={product.id} data={product}/>
          )
        }
      </div>
    </div>
  )
}

export default home