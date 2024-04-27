'use client';
import FormPost from '@/components/FormPost'
import { SubmitHandler } from 'react-hook-form';
import { FormInputPost } from '@/types';

const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
};

const CreatPage = () => {
  return (
    <div>
        <h1 className='text'>Add Post</h1>
        <FormPost submit={handleCreatePost} />
    </div>
    
  )
}

export default CreatPage