import React from 'react';
import { Puff } from 'react-loader-spinner';

const PhotoDetailsPageLoading = () => {
    return (
        <div className='flex justify-center items-center h-[60vh]'>
            <div className='bg-indigo-200 shadow rounded-md p-8'>
                <Puff color='#b33afd'/>
            </div>
        </div>
    );
};

export default PhotoDetailsPageLoading;