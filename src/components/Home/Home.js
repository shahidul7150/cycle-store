import React from 'react'
import Products from '../Products/Products'
import Banner from './Banner'
import MiddlePart from './MiddlePart'
import Timmer from './Timmer'

const Home = () => {
    return (
        <div className="bg-[#fff]">
            <Banner />
            <Products />
            <MiddlePart />
        </div>
    )
}

export default Home