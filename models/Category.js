import CategoryList from "../models/CategoryList";

export async function getStaticProps(){
    const {data: categories } = await commerce.categories.list();

    return{
        props: {
            categories,
        },
    };
}

export default function CategoriesPage ({categories}){
    return (
        <React.Fragment>
           <h1>categories</h1>

           <CategoryList categories={categories}/> 
        </React.Fragment>
    );
}