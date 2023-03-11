import React from 'react'
import Imageplace from "./Imageplace"
import Ellp from '../images/Ellipse2.png'

import "./home.css"
import { FiPlayCircle } from "react-icons/fi";
import Header from '../common/Header';


function Home() {
    return (
        <div>
            <Header />


            <div className='homediv smallhomediv'>
                <div className='imgEdiv'>
                    <img src={Ellp} alt="" />


                </div>
                <div className='Hometextdiv'>


                    <h1 className='maintext'>Be The Change</h1>
                    <h1 className='maintext'> Do Missions. Earn Rewards.</h1>
                    <p className='maintext2'>Have fun doing missions for impact driven brands and earn rewards.

                    </p>
                    <div className='butdiv'>
                        <button className='but1'>Showreel <FiPlayCircle /></button>
                        <button className='but2'>Start Questing</button>
                    </div >

                    <div className='imgEdiv1'  >
                        <img src={Ellp} alt="" />
                    </div>
                </div>




            </div>
            <Imageplace />




        </div>


    )
}

export default Home