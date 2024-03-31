import Link from "next/link";
import React from "react";

const AdminPage = () => {
  return (
    <div className="flex relative top-[100px] w-full h-screen p-[30px] overflow-hidden bg-[#F1F1F1]">
      <h1>Admin Dashboard</h1>

      <button className="h-10 w-20 bg-black text-white">
        <Link href="/register">Add User</Link>
      </button>
    </div>
  );
};

export default AdminPage;
