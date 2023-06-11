import React from 'react'

const Products = () => {
    async function productsList(){
        const data = await fetch("https://guvi-hackthon2-abdulwasims-backend.vercel.app/products", {method:"GET"}).then((data)=>console.log(data.json().data))
    }
    productsList()
  return (
    <div>products</div>
  )
}

export default Products