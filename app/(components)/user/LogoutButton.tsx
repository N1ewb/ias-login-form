'use client'
import { Button } from '@/components/ui/button'
import { signOut } from 'next-auth/react';
import React from 'react'

const LogoutButton = () => {
    const handleLogout = () => {
        signOut({
          callbackUrl: "/",
          redirect: true,
        });
      };
  return (
    <div>
      <Button onClick={() => handleLogout()}>
        Logout
      </Button>
    </div>
  )
}

export default LogoutButton
