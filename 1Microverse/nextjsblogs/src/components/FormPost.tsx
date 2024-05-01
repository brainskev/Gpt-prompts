'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInputPost } from '@/types';
import { FC } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

interface FormPostProps {
    submit: SubmitHandler<FormInputPost>;
    isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
    const { register, handleSubmit } = useForm<FormInputPost>();

    // Fetch list tags
    const {data: dataTags, isLoading: IsloadingTags } = useQuery({
        queryKey: ['tags'],
        queryFn: async () => {
            const repsonse = await axios.get('/api/tags');
            return repsonse.data;
        },
    });

    return (
        <form onSubmit={handleSubmit(submit)} className='flex flex-col items-center justify-center gap-5 mt-10'>
            <input
                type="text"
                {...register("title", { required: true })}
                placeholder="post title..."
                className="input input-bordered w-full max-w-lg"
            />

            <textarea
                {...register("content", { required: true })}
                className="textarea textarea-bordered w-full max-w-lg"
                placeholder="post content..."
            ></textarea>

            <select {...register("tag", { required: true })} 
                className="select select-bordered w-full max-w-lg"
                defaultValue={''}
                >

                <option disabled value = ''>select tags</option>
                <option>Python</option>
                <option>Ruby</option>
                <option>JavaScript</option>
            </select>
            <button type='submit' className='btn btn-primary w-full max-w-lg'>
              {isEditing ? 'Update' : 'Create'}
            </button>
        </form>
    );
};

export default FormPost;
