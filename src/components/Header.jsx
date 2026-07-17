import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
                    <div className='header wrap'>
                        <div className='header-Logo'>
                            <h1>DAILY HABIT TRACKER</h1>
                        </div>
                        <div className='Title'>
                            {/* <h1>Echocoach.ai</h1> */}
                        </div>
                        <span className='Checkin-Pill'>{label}</span>
                        <div className='header-links'>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/coachjournal">Coach Journal</Link>
                            <Link to="/habits">Habits</Link>
                            <Link to="/profile">
                            <i className="fa-solid fa-user"></i>
                            </Link>
                        </div>
                    </div>
                </header>
        </>
    )
}

export default Header;