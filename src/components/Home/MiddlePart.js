import React from 'react'
import classicImg from '../../assets/classicfy.jpg'
import classicBike from '../../assets/classic.png'
import lview from '../../assets/lview.jpg'

const MiddlePart = () => {
    return (
        <div className="grid grid-cols-2 gap-8 mx-12 my-12">
            <div>
                <div className="h-[28rem]" style={{ backgroundImage: 'url(' + classicImg + ')', backgroundSize: 'cover' }}>
                    <div className="bg-[#063b698e] h-full flex justify-start items-end">
                        <h1 className=" pl-5 pb-3  text-white text-3xl font-bold">Mountain
                            <br />
                            <span className="text-lg">  Bike</span>
                        </h1>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
                <div className="grid grid-rows-3 gap-5">
                    <div style={{ backgroundImage: 'url(' + classicBike + ')', backgroundSize: 'cover' }}>
                        <div className="bg-[#063b69d3] h-full flex justify-center items-center">
                            <h1 className="flex justify-center self-center text-center text-white text-xl font-bold">CLASSIC
                                <br />
                                Bike
                            </h1>
                        </div>
                    </div>
                    <div style={{ backgroundImage: 'url(' + classicBike + ')', backgroundSize: 'cover' }}>
                        <div className="bg-[#063b69d3] h-full flex justify-center items-center">
                            <h1 className="flex justify-center self-center text-center text-white text-xl font-bold">Mountain
                                <br />
                                Bike
                            </h1>
                        </div>
                    </div>
                    <div style={{ backgroundImage: 'url(' + classicBike + ')', backgroundSize: 'cover' }}>
                        <div className="bg-[#063b69d3] h-full flex justify-center items-center">
                            <h1 className="flex justify-center self-center text-center text-white text-xl font-bold">Sports
                                <br />
                                Bike
                            </h1>
                        </div>
                    </div>

                </div>
                <div>minicard</div>
            </div>
        </div>
    )
}

export default MiddlePart