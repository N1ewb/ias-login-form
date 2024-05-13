
import StudentsList from '@/app/(components)/admin/StudentsList';
import TeachersList from '@/app/(components)/admin/TeachersList';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getUser } from '@/app/server-actions/users/getUser';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';
import AdminPage from '../admin-dashboard/page';
import StudentDashboard from '../student-dashboard/page';
import TeacherDashboard from '../teacher-dashboard/page';

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  const user = await getUser()

  switch (user?.role) {
    case "ADMIN":
      return <AdminPage />;
    case "STUDENT":
      return <StudentDashboard />;
    case "TEACHER":
      return <TeacherDashboard />;
    default:
      return "Invalid user role";
  }
};

export default Dashboard;