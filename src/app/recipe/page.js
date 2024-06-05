
import RecipsList from '@/components/ui/recipe'

async function fetchListOfRecipes() {
    try{
        const apiResponse = await fetch('https://dummyjson.com/recipes');
        const data = await apiResponse.json();

        return data?.recipes
    }
    catch(e){
        throw new Error(e)
    }
}


export default async function Recipe() {

    const recipeList = await fetchListOfRecipes();
    return (
        <RecipsList recipeList={recipeList} />
    )
}