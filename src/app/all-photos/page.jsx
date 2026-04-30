import Category from '@/components/Category';
import PhotoCard from '@/components/PhotoCard';
import { getTopCategoriesData } from '@/lib/dataFetch';


const AllPhotos =async ({searchParams}) => {
    const {category} =await searchParams;
    // console.log('category', category, searchParams)
    const photos =await getTopCategoriesData();

    const filteredPhotos = category ? photos.filter(photo => photo.category.toLowerCase() == category.toLowerCase()) : photos;

    return (
        <div>
            <h1 className="text-3xl font-semibold  my-5">All Photos</h1>
            <Category/>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>

                {filteredPhotos.map(photo => <PhotoCard
                    key={photo.id}
                    photo={photo} />)}
            </div>
        </div>
    );
};

export default AllPhotos;