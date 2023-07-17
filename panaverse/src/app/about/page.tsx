import React from 'react'
import Image from 'next/image'
import president from '../../../public/President.webp'
import panaverse from '../../../public/logo5.webp'
import ziakhan from '../../../public/sir zia.jpg'


const page = () => {
    return (
        <div className="mt-16">

            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center flex-1">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex-1">
                        <Image className="object-cover  rounded" alt="hero" src={president} />
                    </div>
                    <div className="flex-1 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Dr. Arif Alvi
                        </h1>
                        <p className="mb-8 leading-relaxed max-w-lg ">Dr. Arif Alvi was sworn in as the 13th President of Islamic Republic of Pakistan on 9th September 2018.</p>
                        <p className="mb-8 leading-relaxed max-w-lg ">Dr. Arif Alvi was born in 1949 and completed his early education in Karachi. He did his Bachelor of Dental Surgery (BDS) from De’ Montmorency College of Dentistry, Lahore where he was declared the “Best Graduate”. He completed his Masters of Science in the field of Prosthodontics from University of Michigan (1975) and in Orthodontics from University of Pacific, San Francisco (1982). He was awarded fellowship ‘Diplomatic American Board of Orthodontists (1995)’.</p>
                        <p className="mb-8 leading-relaxed max-w-lg ">President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</p>
                        
                    </div>
                </div>
            </section>
            
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center flex-1">
                    <div className="flex-1 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Panaverse DAO
                        </h1>
                        <p className="mb-8 leading-relaxed max-w-lg ">Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professional metaverse developers from Pakistan for the upcoming Era of Internet</p>
                        <p className="mb-8 leading-relaxed max-w-lg ">President Dr. Arif Alvi has been a renowned professional and has held many important positions in the field of Dentistry. He remained Dean of Orthodontics, College of Physicians and Surgeons of Pakistan, President, Pakistan Dental Association (1997-2001), Pakistan Association of Orthodontists (2005), Asia Pacific Dental Federation (2006-07) and Councilor of the World Dental Federation (2007-2013). Through his sheer hard work in the World Dental Federation, he was able to get the declaration of 20th March as World Oral Health Day. He is also an author of a book, theses, and many articles.</p>
                        
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex-1">
                        <Image className="object-cover  rounded" alt="hero" src={panaverse} />
                    </div>
                </div>
            </section>


            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center flex-1">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 flex-1">
                        <Image className="object-cover  rounded" alt="hero" src={ziakhan} />
                    </div>
                    <div className="flex-1 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Zia Khan
                        </h1>
                        <p className="mb-8 leading-relaxed max-w-lg ">CEO of Panacloud, the world’s first Integrated API Ownership Economy, Crowdfunding, and Development Platform. Volunteer COO of PIAIC, an initiative by the President of Pakistan for AI and computing mass education. Mentor and software developer with 20+ years of expertise in cloud and serverless computing, software design, project management, and API and App development. Expert in concept, business modeling & strategy development for startups, specializing in DeFi and token economics. Mentored and trained hundreds of thousands of developers. Triple masters degrees in business administration, engineering, and finance from Arizona State University. Master in Economics from KU. Certified Public Accountant and Certified Management Accountant in USA.</p>
                        <p className="mb-8 leading-relaxed max-w-lg ">Extensive experience in software architecture, design, development, implementation, and integration. Worked as a developer in Silicon Valley for 7 years. Hands-on work including thousands of hours of development work logged recently resulting in multiple successful projects for cutting edge startups like Panacloud, OpenPD, Datasplash, FreshAir Sensor, Tallyfy, Cloudspot, OnSeen, Unicharts, etc.</p>
                        
                    </div>
                </div>
            </section>



        </div>


    )
}

export default page