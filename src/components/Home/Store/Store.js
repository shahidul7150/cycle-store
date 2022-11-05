import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Products from '../../Products/Products'

const Store = () => {
    return (
        <div>
            <div className="bg-[#062c5e] text-white py-8 px-8" >
                <Navbar />
            </div>
            <div className="mt-8">
                <h2 className="text-center font-bold text-3xl py-3">STORE</h2>
                <Products />
            </div>
        </div>
    )
}

export default Store