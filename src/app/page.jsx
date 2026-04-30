import PhotoCard from "@/components/PhotoCard";
import Banner from "@/components/homePage/Banner";
import { getTopCategoriesData } from "@/lib/dataFetch";


export default async function Home() {
const photos = await getTopCategoriesData();

  return (
    <div>
      <Banner/>
      <h1 className="text-3xl font-semibold mt-7 mb-5">Top Generations</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
        
        {photos.slice(0,8).map(photo => <PhotoCard
         key={photo.id}
         photo={photo} />)}
      </div>
    </div>
  );
}
