import React from 'react';
import "./myQuest.css"
import Card from './Card';
import img1 from "../images/Firebond/div-1.png"
import Navbar from './NavbarQ';


function MyQuest() {
    const data = [
        {
            imgsrc: img1,
            hname: "Reboot World New Citizenship Program",
            name: "Reboot World New Citizenship NFT",
            link: "/",
            pname: "Reboot World",
            xppoints: "30xp",
            task: "5",
            ttask: "5",
            likes: "687"
        }
    ]
    return (
        <div >
            <Navbar />

            <div className='apidiv'>
                <div className='topdiv'>

                </div>
                <div className='diveff'>
                    <h1>Live Quests</h1>
                    <div className='carddiv'>
                        <Card imgsrc={img1}
                            hname="Reboot World New Citizenship Program"
                            name="Reboot World New Citizenship NFT"
                            link="/Quest"
                            pname="Reboot World"
                            xppoints="30xp"
                            task="5"
                            ttask="5"
                            likes="687"
                        />
                        <Card imgsrc={img1}
                            hname="Reboot World New Citizenship Program"
                            name="Reboot World New Citizenship NFT"
                            link="/Quest"
                            pname="Reboot World"
                            xppoints="30xp"
                            task="5"
                            ttask="5"
                            likes="687"
                        />
                        <Card imgsrc={img1}
                            hname="Reboot World New Citizenship Program"
                            name="Reboot World New Citizenship NFT"
                            link="/Quest"
                            pname="Reboot World"
                            xppoints="30xp"
                            task="5"
                            ttask="5"
                            likes="687"
                        />
                        <Card imgsrc={img1}
                            hname="Reboot World New Citizenship Program"
                            name="Reboot World New Citizenship NFT"
                            link="/Quest"
                            pname="Reboot World"
                            xppoints="30xp"
                            task="5"
                            ttask="5"
                            likes="687"
                        />
                        <Card imgsrc={img1}
                            hname="Reboot World New Citizenship Program"
                            name="Reboot World New Citizenship NFT"
                            link="/Quest"
                            pname="Reboot World"
                            xppoints="30xp"
                            task="5"
                            ttask="5"
                            likes="687"
                        />
                        <Card imgsrc={img1}
                            hname="Reboot World New Citizenship Program"
                            name="Reboot World New Citizenship NFT"
                            link="/Quest"
                            pname="Reboot World"
                            xppoints="30xp"
                            task="5"
                            ttask="5"
                            likes="687"
                        />
                        <Card imgsrc={img1}
                            hname="Reboot World New Citizenship Program"
                            name="Reboot World New Citizenship NFT"
                            link="/Quest"
                            pname="Reboot World"
                            xppoints="30xp"
                            task="5"
                            ttask="5"
                            likes="687"
                        />
                        <Card imgsrc={img1}
                            hname="Reboot World New Citizenship Program"
                            name="Reboot World New Citizenship NFT"
                            link="/Quest"
                            pname="Reboot World"
                            xppoints="30xp"
                            task="5"
                            ttask="5"
                            likes="687"
                        />
                        <Card imgsrc={img1}
                            hname="Reboot World New Citizenship Program"
                            name="Reboot World New Citizenship NFT"
                            link="/Quest"
                            pname="Reboot World"
                            xppoints="30xp"
                            task="5"
                            ttask="5"
                            likes="687"
                        />
                        <Card imgsrc={img1}
                            hname="Reboot World New Citizenship Program"
                            name="Reboot World New Citizenship NFT"
                            link="/Quest"
                            pname="Reboot World"
                            xppoints="30xp"
                            task="5"
                            ttask="5"
                            likes="687"
                        />
                        <Card imgsrc={img1}
                            hname="Reboot World New Citizenship Program"
                            name="Reboot World New Citizenship NFT"
                            link="/Quest"
                            pname="Reboot World"
                            xppoints="30xp"
                            task="5"
                            ttask="5"
                            likes="687"
                        />
                        <Card imgsrc={img1}
                            hname="Reboot World New Citizenship Program"
                            name="Reboot World New Citizenship NFT"
                            link="/Quest"
                            pname="Reboot World"
                            xppoints="30xp"
                            task="5"
                            ttask="5"
                            likes="687"
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}

export default MyQuest;
