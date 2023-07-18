'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import img from '../../../public/logo.png'
import menu from '../../../public/menu.svg'
import close from '../../../public/close.svg'
import Link from 'next/link'


const Header = () => {
    const [toggle, setToggle] = React.useState(false);
    return (

        <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center object-cover">
                    <Image src={img} width={60} className="object-cover" alt="Panaverse Logo" />
                    <span className="self-center text-xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">Panaverse</span>
                </Link>
                <div className="flex md:order-2">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 md:px-4 md:py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Apply</button>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex bg-slate-700 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <Image src={toggle ? close : menu}
                            alt="meny"
                            className='sm:h-[28px] w-[28px] object-center'
                            onClick={() => setToggle((prev) => !prev)}
                        />
                    </button>
                </div>
                <div className={`${toggle ? 'flex' : 'hidden'} items-center justify-between  md:flex  w-full  md:w-auto md:order-1" `}>
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 w-full rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/syllabus" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Syllabus</Link>
                        </li>
                        <li>
                            <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                        </li>
                        <li>
                            <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                        </li>
                    </ul>
                </div>
                

            </div>

        </nav>

    )
}

export default Header