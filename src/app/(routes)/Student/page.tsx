import CreateUser from '@/components/CreateUser'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import StudentProfile from '@/components/StudentProfile'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <StudentProfile />
      <Footer />
    </div>
  )
}

export default page