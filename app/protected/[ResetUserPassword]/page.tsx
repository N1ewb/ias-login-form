"use client";
import ResetUserPassword from '@/app/(components)/forms/ResetUserPassword';
import { usePathname } from 'next/navigation';
import React from 'react';

const AdminResetUserPassword = () => {
  const pathname = usePathname();
  const email = pathname.split('@')[1];

  return (
    <div>
      <ResetUserPassword email={email} />
    </div>
  );
};

export default AdminResetUserPassword;