import React from 'react'

const Navbar = () => {
    return (


        <>
          <div className="flex justify-center  bg-no-repeat  bg-cover h-full md:bg-center">
                                            {/* style="background-image:url('https://source.unsplash.com/700x400/?white')"> */}
                                            <div className="flex flex-col items-center ">
                                                <nav className="self-center w-full max-w-7xl ">
                                                    <div
                                                        className="flex md:flex-row flex-col justify-between items-center md:items-start border-b-2 border-blue-900">
                                                        <h1 className=" py-4 text-2xl font-sans font-bold px-10">Portfolio</h1>
                                                        <ul className="flex  items-center text-sm md:text-[18px] font-bold  md:px-10 my-2">
                                                            <li
                                                                className="hover:underline  underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                                                                <a href="#">Home</a>
                                                            </li>
                                                            <li
                                                                className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                                                                <a href="#">Contact</a>
                                                            </li>
                                                            <li
                                                                className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                                                                <a href="#">Services</a>
                                                            </li>
                                                            <li
                                                                className="hover:underline underline-offset-4 decoration-2 decoration-cyan-500 py-2 rounded-lg px-2 md:px-5">
                                                                <a href="#">About</a>
                                                            </li>
                                    
                                                        </ul>
                                    
                                                    </div>
                                                </nav>
                                                <div className="flex flex-col justify-center items-center text-center  max-w-7xl   my-8 py-4 px-10">
                                                    <h1 className="text-base font-medium tracking-wider ">Welcome to my Client Template</h1>
                                                    <span className="underline underline-offset-2 text-gray-700-mt-3"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                                        &nbsp; </span>
                                                    <div className="flex flex-col text-gray-700mt-5">
                                                        <h1 className="text-4xl md:text-[50px] font-semibold">Hello I'm John Watson</h1>
                                                        <p className="text-xl mt-2 md:mt-4 tracking-wide">Designer - Developer - Freelancer</p>
                                                    </div>
                                                    <p className="mt-4 text-sm md:w-[52%] tracking-wide leading-7">Tailblocks provides best Tailwind CSS
                                                        components. Visit our website and feel free to give feedback. With the help of Tailblocks, a user
                                                        can
                                                        build a website in a much lesser time.</p>
                                                    <div className="space-x-3 mt-6 md:mt-4 text-white">
                                                        <a href="#"> <i
                                                                className="fa-brands fa-facebook-f bg-blue-600 hover:text-blue-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center "></i>
                                                        </a>
                                                        <a href="#"> <i
                                                                className="fa-brands fa-twitter bg-blue-600 hover:text-red-500 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
                                                        </a>
                                                        <a href="#"> <i
                                                                className="fa-brands fa-linkedin bg-blue-600 hover:text-yellow-500 hover:bg-white rounded-full px-3 py-[11px] w-9 h-9 text-center"></i>
                                                        </a>
                                                        <a href="#"> <i
                                                                className="fa-brands fa-chrome bg-blue-600 hover:text-indigo-600 hover:bg-white rounded-full px-[10px] py-[11px] w-9 h-9 text-center"></i>
                                                        </a>
                                    
                                                    </div>
                                                    <div className="flex mt-10 space-x-5">
                                                        <button className="bg-white text-blue-900 px-6 py-2 hover:brightness-105 font-semibold">Read
                                                            More</button>
                                                        <button
                                                            className="bg-blue-900 text-white border-2 border-white px-6 py-2 hover:brightness-105 font-semibold">Contact
                                                            Me</button>
                                    
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <script src="https://cdn.tailwindcss.com"></script> */}
                                        {/* <script src="https://kit.fontawesome.com/290d4f0eb4.js" crossorigin="anonymous"></script> */}

        </>


    )
}

export default Navbar