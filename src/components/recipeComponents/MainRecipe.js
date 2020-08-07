import React, { useEffect, useState }  from 'react';
import Recipes from './Recipes';

const MainRecipe = () => {

    const APP_ID = "22db1c06";
    const APP_KEY = "29ac0f68ace8f7723a2784cd4b6fe540";

    // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState('banana');
    useEffect(() => {
        console.log("Effect has been run");
        getRecipes();
    }, [query])

    const getRecipes = async () => {
        const response = await fetch(
            `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
        );
        const data = await response.json();
        console.log(data);
        setRecipes(data.hits);
    }
    const updateSearch = (event) => {
        setSearch(event.target.value);
        // console.log("inside updtae" + search);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        setSearch("");
    }


    return (
        <div >
            <form className="search-form" onSubmit={getSearch}>
                <input className="search-bar" type="text" onChange={updateSearch} value={search} />
                <button className="search-button" type="submit"  >Search</button>
            </form>
            <div className="recipes">
                {recipes.map(recipe => (
                    <Recipes
                        key={recipe.recipe.label}
                        title={recipe.recipe.label}
                        calories={recipe.recipe.calories}
                        image={recipe.recipe.image}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainRecipe;