import { getComment } from '@/app/server-actions/adminQuery/getComments';
import { Button } from '@/components/ui/button';
import { DateTime } from 'next-auth/providers/kakao';
import React, { useEffect, useState } from 'react';

type Comment = {
  id: number;
  created_at: Date;
  comment_content: string | null;
  comment_title: string | null;
};

const Comments = () => {
  const [commentsList, setCommentsList] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchStudents = async () => {
      const commentsData = await getComment();
      if (commentsData) {
        setCommentsList(commentsData);
      }
    };
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      {commentsList.length === 0 ? (
        <p>No comments found.</p>
      ) : (
        <>
        <ul>
          {commentsList.map((comment) => (
            <li key={comment.id}>
              <h3>{comment.comment_title}</h3>
              <p>{comment.comment_content}</p>
              <p>Created at: {comment.created_at.toLocaleString()}</p>
            </li>
          ))}
        </ul>
        <ul><Button>REply</Button></ul>
        </>
      )}
    </div>
  );
};

export default Comments;