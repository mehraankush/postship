"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { Search, Settings, User2, Menu } from 'lucide-react'
import DropdownCcntent from '../core/DropdownCcntent'
import { NavLink } from '@/data/Navbar'



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="border-b border-gray-300 text-black">
            <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">


                <button
                    onClick={toggleMenu}
                    className="md:hidden block text-gray-700 focus:outline-none"
                >
                    <Menu size={24} />
                </button>


                <div className={`items-center w-full md:flex md:w-auto ${isOpen ? 'block pt-5' : 'hidden'}`}>
                    <ul className="flex flex-col md:flex-row gap-5 text-sm">
                        {
                            NavLink.map((item, index) => (
                                <li key={index}>
                                    <button onClick={item.Icon ? toggleDropdown : undefined} className='relative'>
                                        <Link
                                            href={item.href}
                                            className="flex gap-2 font-semibold hover:text-gray-400"
                                        >
                                            {item.name}
                                            {item.Icon && <item.Icon size={20} />}
                                        </Link>
                                    </button>

                                    {isDropdownOpen && item.name === "Tracking Page" && (
                                        <DropdownCcntent/>
                                    )}
                                </li>
                            ))
                        }
                    </ul>
                </div>


                <div className=' gap-6 items-center hidden lg:flex'>
                    <div className="flex items-center border-b border-gray-400 pb-1">
                        <Search className="text-gray-500 mr-3" size={20} />
                        <input
                            type="search"
                            placeholder="Search"
                            className="bg-transparent outline-none"
                        />
                    </div>
                    <div className='flex gap-2 font-semibold text-sm'>
                        <User2 size={20} />
                        <p>Account</p>
                    </div>
                    <div className='flex gap-2 font-semibold text-sm'>
                        <Settings size={20} />
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default Navbar
