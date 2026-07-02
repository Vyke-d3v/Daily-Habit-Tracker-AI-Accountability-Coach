import { Breadcrumbs } from '@heroui/react';
import { useEffect, useState } from 'react';
import "../styles/header.css";
import logo from '../assets/full-logo copy.png'

function Header (){
        const [label,setLabel]= useState ('');

        useEffect (()=> {
            const update =()=>{
                const now = new Date();
                const hour = now.getHours();
                const day = now.toLocaleDateString('en-GB', {weekday: 'short', day: 'numeric', month: 'short'});
                const hasCheckedIn = localStorage.getItem('checkin_'+ now.toDateString());
                
                if(hasCheckedIn) {
                    setLabel(`Checked in · ${day}`);
                }
                else if (hour < 23) {
                    const hoursLeft=23-hour;
                    setLabel(`${day} . ${hoursLeft}h to check in`);
                }
            else{
                setLabel(`Last chance to check in today! ${day}`);
            }
        };
        update();
        const interval = setInterval(update,60000);
        return () => clearInterval(interval);
        }, []);



    return (
        <>
                <header>
                    <div className='h34d3r'>
                        <div className='im4g3'>
                            <img src={logo} alt="Logo icon" />
                        </div>
                        <div className='7i7l3'>
                            {/* <h1>Echocoach.ai</h1> */}
                        </div>
                        <span className='Checkin-Pill'>{label}</span>
                        <div className='h34d3r-l1nk5'>
                            <a href="dashboard">Dashboard</a>
                            <a href="coachjournal">Coach Journal</a>
                            <a href="habits">Habits</a>
                            <a href=""></a>
                        </div>
                    </div>
                </header>
        </>
    )
}

export default Header;