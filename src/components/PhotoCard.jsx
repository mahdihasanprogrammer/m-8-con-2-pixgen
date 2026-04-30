import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IoHeart } from 'react-icons/io5';
import { LuDownload } from 'react-icons/lu';

const PhotoCard = ({ photo }) => {
    return (
        <Card>
            <div className='aspect-square relative w-full'>
                <Image className='rounded-xl object-cover object-center'
                    src={photo.imageUrl}
                    alt={photo.title}
                    fill={true}
                    sizes='sizes="(max-width: 768px) 100vw, 33vw"' />
                <Chip className='absolute right-2 top-2'>{photo.category}</Chip>
            </div>

            <h1 className='font-semibold'>{photo.title}</h1>

            <div className='flex justify-between items-center'>
                <p className='flex items-center gap-2'>
                    <IoHeart />{photo.likes}
                </p>
                <Separator orientation='vertical' />
                <h3 className='flex items-center gap-2'>
                    <LuDownload />{photo.downloads}
                </h3>
            </div>
            <Link href={`/all-photos/${photo.id}`}>
                <Button className='w-full' variant='outline'>
                    View Details
                </Button>
            </Link>
        </Card>

    );
};

export default PhotoCard;