import React from "react";
import Image from 'next/image'
import Statistics from './Group 2379.png'

const StudentDashboard = () => {
  const cards = [
    { name: "Task", value: 67, bgcolor:'#E2FBD7' },
    { name: "Quizzes", value: 46,bgcolor:'#DAD7FE' },
    { name: "Absents", value: 15,bgcolor:'#FFE5D3' },
    { name: "Exam", value: 67,bgcolor:'#E2FBD7' },
  ];

  return (
    <div className="flex relative top-[100px] w-full h-screen p-[30px] overflow-hidden bg-[#F1F1F1]">
      <div className="w-[70%]">
        <h1 className="h-[100px] font-semibold text-1xl">STUDENT DASHBOARD</h1>
        <p className="h-[150px] text-4xl font-medium">
          Kabagsakong naka<br></br>
          <span className="font-normal text-2xl">
            Palihog pag tarong skwela
          </span>
        </p>
        <p className="text-xs w-[900px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          suscipit bibendum tellus, ac finibus enim congue sit amet. Nullam a
          mauris non est pellentesque fermentum quis vitae neque. Suspendisse a
          massa quis lectus volutpat placerat. Donec ut sollicitudin lectus.
          Nulla congue lorem mauris, ac mollis lacus laoreet porta.
        </p>

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
      <div className="flex flex-col w-[30%] items-center justify-around">
          <div className="flex justify-around items-center text-center bg-[white] h-[150px] w-full rounded-[10px]">
            <p>2nd Semester<br></br><span>67%</span></p>
            <p className={`flex items-center text-center justify-center h-[100px] w-[100px] rounded-[50%] bg-[#E2FBD7]`}>67%</p>
          </div>
          <div className="">
              <Image src={Statistics} alt="Statistics" height={600} width={500}></Image>
          </div>
      </div>  
    </div>
  );
};

export default StudentDashboard;
