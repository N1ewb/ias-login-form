"use client"
import Comments from '@/app/(components)/admin/Comments'
import StudentsList from '@/app/(components)/admin/StudentsList'
import TeachersList from '@/app/(components)/admin/TeachersList'
import Link from 'next/link'
import React from 'react'

const AdminPage = () => {
  return (
    <div>
      <div className="flex flex-col relative top-[100px] w-full min-h-screen p-8 overflow-hidden bg-gray-100">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button className="h-10 w-20 bg-black text-white rounded-md">
          <Link href="/register" className="flex items-center justify-center h-full">
            Add User
          </Link>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Students</h2>
          <StudentsList />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Teachers</h2>
          <TeachersList />
        </div>


      </div>
      <div className="comments-list">
        <h2 className="text-xl font-bold mb-4">Teachers</h2>
        <Comments />
      </div>
    </div>
    </div>
  )
}

export default AdminPage
