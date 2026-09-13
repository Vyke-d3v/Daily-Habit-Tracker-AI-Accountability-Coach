// import { useEffect, useState } from 'react';
// import { RangeCalendarNavButton } from '@heroui/react';
// import "../styles/header.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, House, BookOpenText, ListChecks, User } from 'lucide-react';
import { signOut } from 'firebase/auth';
import { auth } from '../services/firebase';
import { useAuth } from '../context/useAuth';

import logo from '../assets/blaze-dht-assets/logo/blaze-logo.svg';
import useCheckinLabel from '../hooks/useCheckinLabel';

const navLinks = [
    { to: '/landing', label: 'Home', icon: House },
    { to: '/coachjournal', label: 'Coach Journal', icon: BookOpenText },
    { to: '/habits', label: 'Habits', icon: ListChecks },
    { to: '/profile', label: 'Profile', icon: User },
];

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const label = useCheckinLabel();
    const { user } = useAuth();

    async function handleSignOut() {
        await signOut(auth);
        setIsMenuOpen(false);
    }

    return (
    <header variant="" className="sticky top-0 z-40 w-full border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <img src={logo} alt="Daily Habit Tracker" className="h-15" />

        <span className="hidden rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-200 sm:inline-block">
            {label}
        </span>

        {user && <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map(({ to, label, icon: Icon }) => (
            <Link key={to} to={to} className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white">
                <Icon size={16} />
                {label}
            </Link>
            ))}
            <button type="button" onClick={handleSignOut} className="text-sm text-neutral-300 hover:text-white">Log out</button>
        </nav>}

        {user && <button
            className="md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
            {isMenuOpen ? <X /> : <Menu />}
        </button>}
        </div>

        {user && isMenuOpen && (
        <nav className="flex flex-col gap-4 border-t border-neutral-800 px-4 py-4 md:hidden">
            {navLinks.map(({ to, label, icon: Icon }) => (
            <Link key={to} to={to} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2 text-neutral-200">
                <Icon size={18} />
                {label}
            </Link>
            ))}
            <button type="button" onClick={handleSignOut} className="text-left text-neutral-200">Log out</button>
        </nav>
        )}
    </header>
    );
}

export default Header;