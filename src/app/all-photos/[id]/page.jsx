import { getTopCategoriesData } from '@/lib/dataFetch';
import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoHeart } from 'react-icons/io5';
import { LuDownload } from 'react-icons/lu';

const PhotoDetailsPage = async ({ params }) => {
    const { id } = await params;
    const categories = await getTopCategoriesData();
    const category = categories.find(photo => photo.id == id)
    return (

        <div className='flex flex-col md:flex-row justify-center mx-auto gap-6 md:gap-10 items-center max-w-4xl mt-10 p-6 rounded-2xl shadow-md'>


            <div className=' relative '>
                <Image className='rounded-xl object-cover object-center'
                    src={category.imageUrl}
                    alt={category.title}
                    width={384}
                    height={384}

                />
                <Chip className='absolute right-2 top-2'>{category.category}</Chip>
            </div>



            <div className='space-y-3'>

                <div>
                    <h1 className='text-2xl mb-2 font-semibold'>{category.title}</h1>
                    <p>{category.prompt}</p>
                </div>

                <div className='flex justify-between items-center'>
                    <p className='flex items-center gap-2'>
                        <IoHeart />{category.likes}
                    </p>
                    <Separator orientation='vertical' />
                    <h3 className='flex items-center gap-2'>
                        <LuDownload />{category.downloads}
                    </h3>
                </div>
              
                <div className='space-y-3'>
                     <Chip color="success">{category.model}</Chip> 
                 <div className='flex items-center flex-wrap  gap-3'>
                       {category.tags.map((tag , index)=> <span key={index}>
                       <Button className='bg-gray-900'> {tag}</Button>
                    </span>)}
                 </div>
                </div>

                <Link href={`/all-photos/${category.id}`}>
                    <Button className='w-full' variant='outline'>
                        View Details
                    </Button>
                </Link>

            </div>


        </div>
    );
};

export default PhotoDetailsPage;