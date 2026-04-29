
export const getTopCategoriesData =async ()=>{
    const res =await fetch('https://m-8-con-2-pixgen.vercel.app/data.json');
    const categories =await res.json();
    return categories;

}

