import { getTeachers } from '@/app/server-actions/adminQuery/getTeachers';
import React, { useEffect, useState } from 'react';

type Teacher = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  createdAt: Date;
  role: string;
};

const TeachersList = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  useEffect(() => {
    const fetchTeachers = async () => {
      const teachersData = await getTeachers();
      if (teachersData) {
        setTeachers(teachersData);
      }
    };

    fetchTeachers();
  }, []);

  return (
    <div className="overflow-x-auto">
      {teachers.length > 0 ? (
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2">First Name</th>
              <th className="px-4 py-2">Last Name</th>
              <th className="px-4 py-2">Email</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="hover:bg-gray-100">
                <td className="border px-4 py-2 capitalize">{teacher.firstName}</td>
                <td className="border px-4 py-2 capitalize">{teacher.lastName}</td>
                <td className="border px-4 py-2">{teacher.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No instructors found.</p>
      )}
    </div>
  );
};

export default TeachersList;