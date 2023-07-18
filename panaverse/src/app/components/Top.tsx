import React from 'react'
import Image from 'next/image'
const Top = (props: any) => {
    return (
        <div className=' min-h-screen'>
                <Image src={props.src} alt="bg image" className=' w-[100%] h-[600px] object-cover bg-fixed absolute -z-0 border-b-[100px] ' />
            <div className="">
            </div>
            <h1 className='z-30'>{props.title}</h1>
        </div>
    )
}

export default Top