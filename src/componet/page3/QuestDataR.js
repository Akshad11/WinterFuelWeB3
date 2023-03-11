import React from 'react'
import "./QuestDataR.css"
import { AiOutlineAliyun } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";

function QuestDataR(props) {
    return (
        <div className='ggg'>
            <div className='QuestMaindiv'>
                <button className='btn1q'>Quest</button>
                <button className='btn1q'>Project info</button>
            </div>
            <div className='condiv'>

                <h3>{props.pname}</h3>
                <div className='kdiv'>
                    <p>By <img src={props.imgsrc} className='smallimg' alt="" /></p>
                    <h5>{props.name}</h5>
                </div>
                <div className='paradiv'>
                    <p>
                        {props.para1}

                    </p>
                    <p>
                        {props.para2}

                    </p>
                </div>
                <div className='tagdiv'>
                    <h6>raffle</h6>
                    <h6>USDC</h6>
                </div>
                <div className='taskdiv'>
                    <p><AiOutlineAliyun />  Perpetual + Raffle</p>
                    <p>{props.task} tasks</p>
                </div>
                <div className='lastflex1'>
                    <h4>  <BsPeople /></h4>
                    <h5>{props.likes} Like</h5>
                </div>

                <div className='xpdiv'>
                    <h3>{props.xppoints} </h3>
                    <h4>100 USDC</h4>

                </div>
                <div className='imgsmallingdvi'>
                    <img src={props.imgsrc2} alt="" />
                    <h4>Cryptocity NFT</h4>
                    <h6>To Everyone</h6>
                    <p>WALL covers the minting gas fees</p>
                </div>



            </div>

        </div>
    )
}

export default QuestDataR