import React from 'react'
import Navbar from '../Navbar/Navbar'
import coverImg from '../../assets/cover.png'
const Banner = () => {
    return (
        <div className="bg-[#062c5e] text-white  ">

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

                <div className="card-body">
                    <Navbar />

                    <div className="block md:flex  justify-between flex-row-reverse items-center">
                        <figure><img src={coverImg} alt="Movie" /></figure>
                        {/* <img className="" src="https://m.media-amazon.com/images/I/81QGBYeo1gL._SX425_.jpg" alt="" /> */}
                        <div className="md:px-12 mt-6">
                            <h1 className="md:text-6xl text-4xl font-bold">Ride With Enjoy</h1>
                            <h3 className="md:text-3xl text-2xl">Rider Store always with you</h3>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default Banner