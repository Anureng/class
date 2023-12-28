import CreateUser from '@/components/CreateUser'
import Navbar from '@/components/Navbar'
import StudentProfile from '@/components/StudentProfile'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar />
      <StudentProfile />
    </div>
  )
}

export default page