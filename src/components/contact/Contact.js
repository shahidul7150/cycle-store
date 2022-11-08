import React from 'react'
import Navbar from '../Navbar/Navbar'
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className="bg-[#062c5e] text-white py-8 px-8" >
                <Navbar />


            </div>
            <div>

                <div class="background">
                    <div class="container">
                        <div class="screen">

                            <div class="screen-body">
                                <div class="screen-body-item left">
                                    <div class="app-title">
                                        <span>CONTACT</span>
                                        <span>US</span>
                                    </div>
                                    <div class="app-contact">CONTACT INFO : +880 175 0432 592 <br /> Email : shahidulislam1474@gmail.com</div>
                                </div>
                                <div class="screen-body-item">
                                    <div class="app-form">
                                        <div class="app-form-group">
                                            <input class="app-form-control" placeholder="NAME" value="Shahidul Islam" />
                                        </div>
                                        <div class="app-form-group">
                                            <input class="app-form-control" placeholder="EMAIL" />
                                        </div>
                                        <div class="app-form-group">
                                            <input class="app-form-control" placeholder="CONTACT NO" />
                                        </div>
                                        <div class="app-form-group message">
                                            <input class="app-form-control" placeholder="MESSAGE" />
                                        </div>
                                        <div class="app-form-group buttons">
                                            <button class="app-form-button">CANCEL</button>
                                            <button class="app-form-button">SEND</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact