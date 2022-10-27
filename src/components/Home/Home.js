import React from 'react'
import Products from '../Products/Products'
import Banner from './Banner'
import MiddlePart from './MiddlePart'
import Partner from './Partner'
import Timmer from './Timmer'

const Home = () => {
    return (
        <div className=" bg-[#f3f2f2]">
            <Banner />
            <div className="mt-24">
                <h1 className="text-center text-2xl font-semibold my-8">Feature Products</h1>
                <Products />
            </div>
            <MiddlePart />
            <div>
                <h1 className="text-center text-2xl font-semibold my-8">Best Sell Products</h1>
                <Products />
            </div>
     <div>
     <Partner />
     </div>
        </div>
    )
}

export default Home