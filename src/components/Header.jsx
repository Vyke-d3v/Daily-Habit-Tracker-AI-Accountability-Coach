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
    const label = useCheckinLabel();

    return (
        <>
                <header className='sticky top-0 z-40 w-full border-b border-neutral-800vbg-neutral-950/80 backdrop-blur-1g'>
                    <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-4'>
                        <img src= {logo} alt="Daily Habit Tracker" className='h-8' />

                        <span className='hidden rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-200 sm:inline-block'>
                            {label}
                        </span>

                        <nav className='hidden items-center gap-6 md:flex'>
                            {navLinks.map(({to,label,icon: Icon}) =>(
                                <Link key={{to} to={to} className='flex items-center gap-2 text-sm text-neutral-300 hover:text-white' }vl>
                                    <Icon size={16}/>
                                    {label}
                                </Link>
                            ))}

                        </nav>

                        

                    </div>
                </header>
        </>
    )
}

export default Header;