import React from 'react'
import Navbar from '../Navbar/Navbar'
import coverImg from '../../assets/cover.png'
import productImg from '../../assets/lview.jpg'
import Timmer from './Timmer'
import { RiArrowRightSLine } from "react-icons/ri";
const Banner = () => {
    return (
        <div className="bg-[#062c5e] text-white relative ">

            {/* <div
                className="py-20 rounded-tl-lg"
                style={{
                    backgroundImage: `url(${coverImg})`,
                    backgroundPosition: 'right',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '15px',



                }}> */}
            {/* <Navbar /> */}

            {/* <div className="flex  justify-between"> */}
            {/* <img className="" src="https://m.media-amazon.com/images/I/81QGBYeo1gL._SX425_.jpg" alt="" /> */}
            {/* <div className="px-12 mt-6">
                        <h1 className="text-6xl">Ride With Enjoy</h1>
                        <h3 className="text-3xl">Rider Store always with you</h3> */}
            {/* </div>

                </div>
            </div> */}
            {/* // </div> */}


            <div className="card card-side md:felx md:flex-row-reverse  flex-col bg-[#062c5e] shadow-xl rounded-none">

                <div className="card-body pb-0">
                    <Navbar />

                    <div className=" block md:flex  justify-between flex-row-reverse items-center">
                        <div className="bg-[#0c367273] rounded-t-full pb-8">
                            <figure><img src={coverImg} alt="cover" /></figure>
                        </div>
                        {/* <img className="" src="https://m.media-amazon.com/images/I/81QGBYeo1gL._SX425_.jpg" alt="" /> */}
                        <div className="md:px-12 ">
                            <h1 className="md:text-6xl text-4xl font-bold">Ride With Enjoy</h1>
                            <h3 className="md:text-3xl text-2xl">Rider Store always with you</h3>
                            <button className="bg-[#fff] text-[#062c5e] mt-5 py-1 px-5 rounded-[5px] font-medium hover:bg-[#fae8e8f8]">Visit Store</button>
                        </div>

                    </div>

                </div>




            </div>

            <div className=" w-[1080px] shadow-md bg-white mx-32 absolute -bottom-12 hidden   lg:flex  text-[#062c5e] rounded-[14px]" >
                <div className="px-8 grid-cols-2 grid justify-between w-full gap-5 items-center">
                    <div className="flex gap-8 items-center">
                        <h1 className="text-lg font-medium">Flash Sale</h1>
                        {/* ------------------------- */}
                        <div className="grid grid-col font-medium ">

                            < Timmer />
                        </div>
                        {/* ------------------------- */}
                    </div>
                    <div className=" grid grid-cols-4 justify-between items-center">
                        <div className="  p-2 ">
                            <img width="60%" className="m-auto" src={productImg} alt="" />
                            <p className="text-xs">$<s>250</s> <span className="text-lg font-medium pl-5 mb-0">$200</span></p>
                        </div>
                        <div className="  p-2 ">
                            <img width="60%" className="m-auto" src={productImg} alt="" />
                            <p className="text-xs">$<s>250</s> <span className="text-lg font-medium pl-5 mb-0">$200</span></p>
                        </div>
                        <div className="  p-2 ">
                            <img width="60%" className="m-auto" src={productImg} alt="" />
                            <p className="text-xs">$<s>250</s> <span className="text-lg font-medium pl-5 mb-0">$200</span></p>
                        </div>

                        <p className="pl-5 font-bold cursor-pointer flex justify-center items-center ">See More <RiArrowRightSLine /> </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner