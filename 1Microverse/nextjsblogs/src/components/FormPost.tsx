'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInputPost } from '@/types';
import { FC } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import { Tag } from '@prisma/client';

interface FormPostProps {
    submit: SubmitHandler<FormInputPost>;
    isEditing: boolean;
}

const FormPost: FC<FormPostProps> = ({ submit, isEditing }) => {
    const { register, handleSubmit } = useForm<FormInputPost>();

    // Fetch list tags
    const {data: dataTags, isLoading: IsloadingTags } = useQuery<Tag[]>({
        queryKey: ['tags'],
        queryFn: async () => {
            const repsonse = await axios.get('/api/tags');
            return repsonse.data;
        },
    });

    console.log(dataTags);

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

            {IsloadingTags ?(
                <span className="loading loading-dots loading-md"></span>
            ):(<select {...register("tag", { required: true })} 
                className="select select-bordered w-full max-w-lg"
                defaultValue={''}
                >

                <option disabled value = ''>select tags</option>
                {dataTags?.map((item) => (
                    <option key={item.id} value={item.id}>{item.name}</option>
                ))}
            </select>)}
            <button type='submit' className='btn btn-primary w-full max-w-lg'>
              {isEditing ? 'Update' : 'Create'}
            </button>
        </form>
    );
};

export default FormPost;
