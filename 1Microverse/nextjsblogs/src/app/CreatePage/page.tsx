'use client';
import FormPost from '@/components/FormPost'
import { SubmitHandler } from 'react-hook-form';
import { FormInputPost } from '@/types';
import BackButton from '@/components/BackButton';

const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
};

const CreatPage = () => {
  return (
    <div>
        <BackButton />
        <h1 className='text-2xl my-4 font-bold text-center'>Add Post</h1>
        <FormPost submit={handleCreatePost} isEditing={false}/>
    </div>
    
  )
}

export default CreatPage