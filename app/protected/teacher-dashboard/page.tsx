import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { db } from '@/lib/db';
import { getServerSession } from 'next-auth';
import Image from 'next/image';
import React from 'react'



const TeacherDashboard = async () => {
  const session = await getServerSession(authOptions);

  const user = await db.user.findUnique({
    where: {
        email: session && session.user?.email || 'not logged in',
    }
  })

  const Students = [
    {firstname: 'Nathan', lastname: 'Lucero', tasks: 65376, Assignments: 12109, Exam: 32645},
    {firstname: 'Laloyd', lastname: 'Semblante', tasks: 34567, Assignments: 56387, Exam: 48719},
    {firstname: 'Dixtir', lastname: 'Basegro', tasks: 48910, Assignments: 34455, Exam: 23809},
  ]

  const cards = [
    { name: "Task", value: 67, bgcolor:'#E2FBD7' },
    { name: "Quizzes", value: 46,bgcolor:'#DAD7FE' },
    { name: "Absents", value: 15,bgcolor:'#FFE5D3' },
    { name: "Exam", value: 67,bgcolor:'#E2FBD7' },
  ];

  return (
    <div className='flex flex-col relative top-[100px] w-full h-screen p-[30px] overflow-hidden bg-[#F1F1F1]'>
      <h1 className='font-semibold text-[30px]'> Good Afternoon, Ma'am <span className='text-[#34B53A]'>{user?.firstName} {user?.lastName}</span></h1>
      <div className='flex w-[80%] h-auto justify-around items-center '>
        {Students.map((student) => 
          <div className='bg-[white] h-[200px] w-[300px] flex flex-col justify-center items-center'>
            <Image src="" alt="Profile Pic" /> 
            <h2 className='font-semibold'>{student.firstname} {student.lastname}</h2>
            <p className='font-semibold'>Tasks <span className='font-normal'>{student.tasks}</span></p>
            <div></div>
            <p className='font-semibold'>Assignments <span className='font-normal'>{student.Assignments}</span></p>
            <p className='font-semibold'>Exam <span className='font-normal'>{student.Exam}</span></p>
          </div>
        )}
      </div>
      <div className=''>
        <Image src="" alt='232323'/>
      </div>
      <div className="flex text-center items-center w-[90%] justify-around font-semibold mt-[140px]">
          {cards.map((card, index) => (
            <div
              className="flex flex-col h-[220px] w-[200px] bg-[white] rounded-sm text-center items-center p-5 gap-6"
              key={index}
            >
              <p className=" text-[17px]">{card.name}</p>
              <p style={{backgroundColor: `${card.bgcolor}`}} className={`flex items-center text-center justify-center h-[100px] w-[100px] rounded-[50%]`}>{card.value}%</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default TeacherDashboard
 