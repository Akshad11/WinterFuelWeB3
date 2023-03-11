import React from 'react'
import Navbar from './NavbarQ'
import "./quest.css"
import QuestDataR from './QuestDataR'
import imag1 from "../images/Firebond/div-1.png"
import imga2 from "../images/image3.png"
import QuestDataL from './QuestDataL'

function Quest() {
    return (
        <div>
            <Navbar />
            <div id='QuestMainDiv'>
                <div id="columdiv">
                    <QuestDataR
                        imgsrc={imag1}
                        imgsrc2={imga2}
                        hname="Reboot World "
                        name="Reboot World"
                        link="/Quest"
                        pname="Reboot World"
                        xppoints="30xp"
                        task="5"
                        ttask="5"
                        likes="687"
                        para1="Spacekayak is a web3 native design studio helping 
                        startups go from 0-1. This creative team is creating the next 
                        stream of internet companies at the intersection of culture x tech x 
                        community through their thesis of seamless on-chain experiences. "
                        para2="Follow Twitter, subscribe to the Newsletter and share with your
                        frens on Twitter to get Cryptocity NFT Wall 
                        proof and a chance to win from $100 raffle"
                    />

                </div>
                <div id='flexdiv'>
                    <QuestDataL
                        nametask="Sign up - https://weekinweb3.substack.com/ a screenshot & upload here"
                        xppoints="30xp"
                    />
                    <QuestDataL
                        nametask="Sign up - https://weekinweb3.substack.com/ a screenshot & upload here"
                        xppoints="30xp"
                    />
                    <QuestDataL
                        nametask="Sign up - https://weekinweb3.substack.com/ a screenshot & upload here"
                        xppoints="30xp"
                    />
                </div>

            </div>

        </div>
    )
}

export default Quest