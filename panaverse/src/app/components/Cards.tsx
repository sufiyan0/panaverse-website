'use client'
import * as React from "react"
import { Button } from "./ui/button"
import Link from "next/link"

const data = [
  {
    id: 1,
    heading: 'Web 3.0 & Mataverse',
    content: 'Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.'
  },
  {
    id: 2,
    heading: 'Blockchain',
    content: 'Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.'
  },
  {
    id: 3,
    heading: 'Typescript',
    content: 'Panaverse DAO is a community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers. Panaverse DAO is struggling to produce professionals.'
  },
]

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card"

import { Input } from "./ui/input"
import { Label } from "./ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select"


const Cards = () => {
  return (

    <div className=" flex flex-wrap items-center justify-center p-12 md:p-6 mt-16" >

      <div className="max-w-6xl flex flex-wrap items-center justify-center mx-auto ">
        {data.map(data => (
          <div className="m-3 shadow-2xl" key={data.id}>

            <Card className="w-[300px] sm:w-[350px]">
              <CardHeader>
                <CardTitle>{data.heading}</CardTitle>
              </CardHeader>
              <div className="border-4 border-black w-[90%] mx-auto my-3 rounded-xl"></div>
              <CardContent>
                <p>{data.content}</p>
              </CardContent>
              <CardFooter className="flex justify-center items-center mx-auto">
                <Button >
                  <Link href='./syllabus'>Learn More </Link>
                  
                </Button>
              </CardFooter>
            </Card>
          </div>
        ))}


      </div>
    </div>



  )
}

export default Cards;
