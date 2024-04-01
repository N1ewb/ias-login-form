import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";

import handicon from "./Group 2382.png";

import Image from "next/image";
import React from "react";

const TeacherDashboard = async () => {
  const session = await getServerSession(authOptions);

  const user = await db.user.findUnique({
    where: {
      email: (session && session.user?.email) || "not logged in",
    },
  });

  const Students = [
    {
      firstname: "Nathan",
      lastname: "Lucero",
      tasks: 65376,
      Assignments: 12109,
      Exam: 32645,
    },
    {
      firstname: "Laloyd",
      lastname: "Semblante",
      tasks: 34567,
      Assignments: 56387,
      Exam: 48719,
    },
    {
      firstname: "Dixtir",
      lastname: "Basegro",
      tasks: 48910,
      Assignments: 34455,
      Exam: 23809,
    },
  ];

  const cards = [
    { name: "Task", value: 67, bgcolor: "#E2FBD7" },
    { name: "Quizzes", value: 46, bgcolor: "#DAD7FE" },
    { name: "Absents", value: 15, bgcolor: "#FFE5D3" },
    { name: "Exam", value: 67, bgcolor: "#E2FBD7" },
  ];

  return (
    <div className="flex flex-col relative top-[100px] w-full h-screen p-[30px] overflow-hidden bg-[#F1F1F1] justify-evenly">
      <h1 className="font-semibold text-[30px]">
        {" "}
        Good Afternoon, Ma'am{" "}
        <span className="text-[#34B53A]">
          {user?.firstName} {user?.lastName}
        </span>
      </h1>
      <div className="flex w-[80%] h-auto justify-around items-center ">
        {Students.map((student) => (
          <div className="bg-[white] h-[200px] w-[300px] flex flex-col justify-around items-center p-4">
            <div className="flex ">
              <Image src="" alt="Profile Pic" />
              <h2 className="font-semibold">
                {student.firstname} {student.lastname}
              </h2>
            </div>
            <p className="font-semibold w-[100%] flex justify-around text-sm items-center ">
              Tasks <span className="font-normal text-xs">{student.tasks}</span>
            </p>
            <div className="w-[80%] h-[7px] bg-[#4339F2] rounded-md"></div>
            <p className="font-semibold w-[100%] flex justify-around text-sm items-center">
              Assignments{" "}
              <span className="font-normal text-xs">{student.Assignments}</span>
            </p>
            <div className="w-[80%] h-[7px] bg-[#FF3A29] rounded-md"></div>
            <p className="font-semibold w-[100%] flex justify-around text-sm items-center">
              Exam <span className="font-normal text-xs">{student.Exam}</span>
            </p>
            <div className="w-[80%] h-[7px] bg-[#34B53A] rounded-md"></div>
          </div>
        ))}
      </div>
      <div className="h-[24%] w-[78%] bg-[#4339F2] rounded-sm flex text-white justify-around items-center">
        <div className="">
          <Image src={handicon} alt="232323" className="h-[80px] w-[auto]" />
        </div>
        <div className="">
          <p className="text-xl">Student Performance</p>
          <p className="text-sm font-thin">
            To see your students Performance, you can click the examine button
            <br></br>and start your examination.
          </p>
        </div>
        <button className="text-[#4339F2] w-[15%] h-[30%] bg-white rounded-sm">
          Examine
        </button>
      </div>
      <div className="flex text-center items-center w-[90%] justify-around font-semibold ">
        {cards.map((card, index) => (
          <div
            className="flex flex-col h-[220px] w-[200px] bg-[white] rounded-sm text-center items-center p-5 gap-6"
            key={index}
          >
            <p className=" text-[17px]">{card.name}</p>
            <p
              style={{ backgroundColor: `${card.bgcolor}` }}
              className={`flex items-center text-center justify-center h-[100px] w-[100px] rounded-[50%]`}
            >
              {card.value}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeacherDashboard;
