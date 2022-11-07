import React from 'react'
import Navbar from '../Navbar/Navbar'
import w1 from '../../assets/w-1.jpg'
import w2 from '../../assets/w-2.jpg'
import w3 from '../../assets/w-3.jpg'
import map from '../../assets/map.jpg'
const About = () => {
    return (
        <div >
            <div className="bg-[#062c5e] text-white py-8 px-8" >
                <Navbar />
            </div>
            <div className="px-12">
                <h1 className="text-center text-2xl font-bold mt-8 uppercase pb-8">Who we are</h1>
                <div className="grid grid-cols-3 gap-8">

                    {/* card1  */}
                    <div className="grid grid-row bg-[#16165e] text-white rounded-md">
                        <img className="rounded-tl-md rounded-tr-md" src={w1} alt="" />
                        <div className="p-5">
                            <h1 className="text-2xl font-bold py-2 uppercase">We are confident of Girls</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                    </div>

                    {/* card2  */}
                    <div className="grid grid-row bg-[#16165e] text-white rounded-md">
                        <img className="rounded-tl-md rounded-tr-md" src={w2} alt="" />
                        <div className="p-5">
                            <h1 className="text-2xl font-bold py-2 uppercase">Happiness of children</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                    </div>
                    {/* card3  */}
                    <div className="grid grid-row bg-[#16165e] text-white rounded-md">
                        <img className="rounded-tl-md rounded-tr-md" src={w3} alt="" />
                        <div className="p-5">
                            <h1 className="text-2xl font-bold py-2 uppercase">We are confident of old citizen</h1>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-12">
                <h1 className="text-2xl font-bold py-8 uppercase text-center">Our STORE LOcation</h1>
                <div className="grid grid-cols-2 justify-center items-center shadow-2xl bg-white ">
                    <img src={map} alt="" />
                    <div className="p-5">
                        <h1 className="text-6xl font-bold uppercase">Our outlat wait for your visiting</h1>
                        <p className="text-2xl mt-5 text-gray-400 font-thin">Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About