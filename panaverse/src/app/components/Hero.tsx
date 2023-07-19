import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import img from '../assets/logo2.webp'
import img1 from '../assets/logo4.webp'
import background from '../../../public/Two-users-interacting-with-each-other-and-the-Metaverse-using-virtual-reality-headsets.jpg'



const Hero = () => {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center " id='Home'>

            <div className="">

            {/* <Image src={background} alt='background' className='absolute -z-0 opacity-60 w-full h-screen   object-cover top-0 ' /> */}
            <section className="mt-24 items-center justify-center z-10 text-gray-600 body-font ">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900  max-w-xl leading-relaxed">
                            Prepare yourself for the <span className='text-teal-700'>Next Generation</span>  of Internet with <span className='text-teal-700'>Panaverse</span>

                        </h1>
                        <p className="mb-8 leading-relaxed max-w-xl">One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hnover:bg-indigo-600 rounded text-lg">
                            <Link href='./syllabus'>More Info</Link> 
                            </button>
                        </div>
                    </div>
                    <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded" alt="hero" src={img} />
                    </div>
                </div>
            </section>

            </div>

            <section className=" z-10 text-gray-600 body-font">
                <div className="flex-1 container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className="flex-1 lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image className="object-cover object-center rounded" alt="hero" src={img1} />
                    </div>
                    <div className="flex-1 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                            Program Of Studies
                        </h1>
                        <p className=" mb-8 leading-relaxed max-w-xl">This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            <Link href='./syllabus'>Read More </Link> 
                                </button>
                        </div>
                    </div>
                </div>
            </section>

            


        </div>
    )
}

export default Hero