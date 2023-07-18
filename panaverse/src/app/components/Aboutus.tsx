import React from 'react'
import Image from 'next/image'
import img from '../assets/ambient.webp'



const Aboutus = () => {
    return (
        <div>
            <section className="mt-24 items-center justify-center z-10 text-gray-600 body-font ">
                <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
                    <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-5xl text-3xl mb-4 font-medium text-gray-900  max-w-xl leading-relaxed">
                            what is  <span className='text-teal-700'>Panaverse</span>

                        </h1>
                        <p className="mb-8 leading-relaxed max-w-xl">Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet.</p>
                        <div className="flex justify-center">
                            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">REad More</button>
                        </div>
                    </div>
                    <div className=" lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <Image className="object-cover object-center rounded" alt="hero" src={img} />
                    </div>
                </div>
            </section>

            <section id='banner' className='flex flex-col items-center justify-center h-[60vh] my-14'>
                <div className="w-3/4 my-12 py-14 p-6 sm:p-16 flex flex-col bg-cyan-300 rounded-lg border-l-8 border-cyan-700 text-center">
                    <h1 className='text-3xl md:text-6xl font-semibold py-3'>The Program in a Nutshell </h1>
                    <h2 className='text-xl md:text-4xl font-semibold text-cyan-900 py-3'>Earn While You Learn</h2>
                    <p>Earn While You Learn
                        In this brand-new type of curriculum, students will learn how to make money and
                         boost exports in the classroom and will begin doing so within six months of the program’s 
                         beginning. It resembles a cross between a corporate venture and an educational project.</p>
                </div>
            </section>
        </div>
    )
}

export default Aboutus