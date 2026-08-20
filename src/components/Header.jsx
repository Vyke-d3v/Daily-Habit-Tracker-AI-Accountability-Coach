// import { useEffect, useState } from 'react';
// import { RangeCalendarNavButton } from '@heroui/react';
// import "../styles/header.css";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, House,BookOpenText, ListChecks, User } from 'lucide-react';
import useCheckinLabel from '../hooks/'
import logo from '../assets/full-logo copy.png';

const navLinks = [
    {to:'/landing', label:'Home', icon: House},
]

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
                        <RangeCalendarNavButton>
                            <span className='Checkin-Pill'>{label}</span>
                        </RangeCalendarNavButton>
                        <div className='header-links'>
                            <Link to="/landing"><i class="fa-solid fa-house"></i>Home</Link>
                            <span> | </span>
                            <Link to="/coachjournal"><i class="fa-solid fa-book-journal-whills"></i>Coach Journal</Link>
                            <span> | </span>
                            <Link to="/habits"><i class="fa-solid fa-list-check"></i>Habits</Link>
                            <span> | </span>
                            <Link to="/profile">
                            <i className="fa-solid fa-user"></i> Profile
                            </Link>
                        </div>
                    </div>
                </header>
        </>
    )
}

export default Header;