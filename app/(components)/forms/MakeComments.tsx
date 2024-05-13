'use client'

import React, {useState} from 'react'
import { makeComment } from "@/app/server-actions/users/makeComment";
import { useToast } from "@/components/ui/use-toast";

const MakeComments = () => {
    const { toast } = useToast();
    const [commentTitle, setCommentTitle] = useState("")
    const [commentText, setCommentText] = useState("")
    const [message, setMessage] = useState("")

  const createComment = async () => {
    try{
      
      const createcomment = await makeComment(commentTitle, commentText)
      
      setMessage(createcomment)

      toast({
        title: "Comment Success",
        description: "Comment Sucess",
      });
    }catch(error){
        console.log(error)
      toast({
        title: "Comment Error",
        description: "Comment Failed, Please try again",
      });
    }
  }
  return (
    <div className='flex flex-col box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05) h-[200px] justify-around'>
        <p>Comment</p>
        <div>
            <p className='font-xs'>Title</p>
            <input onChange={(e) =>setCommentTitle(e.target.value)}/>
        </div>
        <div>
            <p className='font-xs'>Content</p>
            <input onChange={(e) =>setCommentText(e.target.value)}/>
        </div>
        <button className='bg-black py-1 px-5 text-white' onClick={() => createComment()}>Comment</button>
    </div>
  )
}

export default MakeComments