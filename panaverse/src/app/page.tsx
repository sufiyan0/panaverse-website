import Image from 'next/image'
import Cards from './components/Cards'
import Header from './components/Header'
import Navbar from './components/navbar'
import Hero from './components/Hero'
import Aboutus from './components/Aboutus'
import Instructor from './components/Instructor'

export default function Home() {
  return (
    <>

     
      <Hero />
      <Cards />
      <Aboutus />
      <Instructor />

    </>
  )
}
