import { useEffect, useState } from 'react';
import logo from '../assets/full-logo.png'

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
                    <img src={logo} alt="Logo icon" />
                    <h1>Echocoach.ai</h1>
                    <span className='Checkin-Pill'>{label}</span>
                    <a href="dashboard">Dashboard</a>
                    <a href="coachjournal">Coach Journal</a>
                    <a href="habits">Habits</a>
                    <a href=""></a>
                </header>
        </>
    )
}

export default Header;