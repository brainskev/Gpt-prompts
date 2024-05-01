import BackButton from '@/components/BackButton'
import ButtonAction from '@/components/ButtonAction'
import { db } from '@/lib/db';
import React, { FC } from 'react'

interface BlogDetailProps {
  params: {
    id:string
  };
}

async function getPost(id: string){
  const response = await db.post.findFirst({
    where: {
      id: id
    },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    }
  });
  return response;
  
};



const BlogDetailPage: FC<BlogDetailProps> = async ({params}) => {
  const post = await getPost(params.id)

  return (
    <div>
        <div className="mb-8">
            <h2 className='text-2xl font=bold my-4v'>{post?.title}</h2>
            
        </div>
        <p className='text-slate-700'>{post?.content}</p>
        <div className="badge badge-accent">{post?.tag.name}</div>
    </div>
  )
}

export default BlogDetailPage