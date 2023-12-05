import Constructor from '@/components/Constructor'
import Featured from '@/components/Featured'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import TrustedOver from '@/components/TrustedOver'
import Image from 'next/image'

export default function Home() {
  return (
    <>
   <Navbar/>
   <Header/>
   <TrustedOver/>
   {/* <Featured/> */}
   <Constructor/>
   <Footer/>
    </>
  )
}
