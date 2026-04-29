import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

const AllPhotosLoading = () => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
           <ThreeDots
           height={100}
           width={100}
           color='#b33afd'
           /> 
        </div>
    );
};

export default AllPhotosLoading;