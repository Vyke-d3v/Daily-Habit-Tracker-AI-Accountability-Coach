// import { useEffect, useState } from 'react';
// import { RangeCalendarNavButton } from '@heroui/react';
// import "../styles/header.css";

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, House,BookOpenText, ListChecks, User } from 'lucide-react';
import useCheckinLabel from '../hooks/useCheckinLabel'
import logo from '../assets/full-logo copy.png';

const navLinks = [
    {to:'/landing', label:'Home', icon: House},
    {to: '/coachjournal', label: 'Coach Journal', icon: BookOpenText},
    {to: '/habits', label: 'Habits', icon: ListChecks},
    {to: '/profile', label: 'Profile', icon: User}
];

function Header (){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const label = useCheckinLabel

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