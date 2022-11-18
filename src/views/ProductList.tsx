import React from 'react'
import Header from '../components/header/Header'

type Props = {}

function ProductList({}: Props) {
  return (
    <section className='container-section p-5 bg-dark text-white d-flex justify-content-center align-items-center'>
        <div className="container">
        Products
        </div>
    </section>
  )
}

export default ProductList