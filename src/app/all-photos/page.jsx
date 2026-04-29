import CategoryCard from '@/components/CategoryCard';
import { getTopCategoriesData } from '@/lib/dataFetch';
import React from 'react';

const AllPhotos =async () => {
    const categories =await getTopCategoriesData();
    return (
        <div>
            <h1 className="text-3xl font-semibold  my-5">All Photos</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

                {categories.map(category => <CategoryCard
                    key={category.id}
                    category={category} />)}
            </div>
        </div>
    );
};

export default AllPhotos;