import React, { useState, useEffect } from 'react';
import { getStudents } from '@/app/server-actions/adminQuery/getStudents';
import Link from 'next/link';
import { deleteUser } from '@/app/server-actions/adminQuery/removeUser';
import { TrashIcon } from 'lucide-react';

type Student = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  createdAt: Date;
  role: string;
};

const StudentsList = () => {
  const [students, setStudents] = useState<Student[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsData = await getStudents();
      if (studentsData) {
        setStudents(studentsData);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div className="overflow-x-auto">
      {students.length > 0 ? (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
              <th className='px-4 py-2'>Reset</th>
              <th className='px-4 py-2'>Delete</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2 capitalize">{student.firstName}</td>
                <td className="border px-4 py-2 capitalize">{student.lastName}</td>
                <td className="border px-4 py-2">{student.email}</td>
                <td className="border px-4 py-2"><Link href={`ResetUserPassword@${student.email}`} className='bg-[#f74747] py-1 px-2 text-white rounded-sm'>Password</Link></td>
                <td className="border px-4 py-2"><button className='bg-[#f74747] py-1 px-2 text-white rounded-sm' onClick={() => deleteUser(student.email)}><TrashIcon/></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No students found.</p>
      )}
    </div>
  );
};

export default StudentsList;