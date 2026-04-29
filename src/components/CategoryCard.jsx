import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import React from 'react';
import { IoHeart } from 'react-icons/io5';
import { LuDownload } from 'react-icons/lu';

const CategoryCard = ({ category }) => {
    return (
        <Card>
            <div className='aspect-square relative w-full'>
                <Image className='rounded-xl object-cover object-center'
                    src={category.imageUrl}
                    alt={category.title}
                    fill={true}
                    sizes='sizes="(max-width: 768px) 100vw, 33vw"' />
                    <Chip  className='absolute right-2 top-2'>{category.category}</Chip>
            </div>

            <h1 className='font-semibold'>{category.title}</h1>

            <div className='flex justify-between items-center'>
                <p className='flex items-center gap-2'>
                    <IoHeart/>{category.likes}
                </p>
                <Separator orientation='vertical'/>
                <h3 className='flex items-center gap-2'>
                    <LuDownload/>{category.downloads}
                </h3>
            </div>
            <Button className='w-full' variant='outline'>View Details</Button>
        </Card>

    );
};

export default CategoryCard;