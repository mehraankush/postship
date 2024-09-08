import React from 'react'
import Link from 'next/link'

const DropdownCcntent = () => {
    return (
        <div className="absolute top-[210px] sm:top-[45px]  z-10  w-44 bg-white border border-gray-200 rounded-lg shadow-lg">
            <ul className="py-2 text-sm text-gray-700">
                <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Settings
                    </Link>
                </li>
                <li>
                    <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                        Earnings
                    </Link>
                </li>
            </ul>
            <div className="py-1">
                <Link
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                    Sign out
                </Link>
            </div>
        </div>
    )
}

export default DropdownCcntent