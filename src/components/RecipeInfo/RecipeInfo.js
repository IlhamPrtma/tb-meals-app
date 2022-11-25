import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../context/context";
import './RecipeInfo.scss';
let vId = "";

const RecipeInfo = () => {
    const { fetchRecipe, recipe, url } = useContext(myContext);
    const { MealId } = useParams();


    useEffect(() => {
        fetchRecipe(MealId)
    }, [MealId, fetchRecipe]);

    const str = url.split('=');
    vId = str[1];

    return (
        <div className="recipe">
            {recipe.map((meals) => (
                <div className="recipe-content" key={meals.idMeal}>
                    <img src={meals.strMealThumb} alt="" />
                    <div className="inner-content">
                        <h1>{meals.strMeal}</h1>
                        <h2>{meals.strArea} Food</h2>
                        <h3>Category {meals.strCategory}</h3>
                    </div>
                    <div className="recipe-detail">
                        <div className="ingredients">
                            <h2>Ingredients</h2><br />
                            
                            <h4>{meals.strIngredient1}: {meals.strMeasure1}</h4>
                            <h4>{meals.strIngredient2}: {meals.strMeasure2}</h4>
                            <h4>{meals.strIngredient3}: {meals.strMeasure3}</h4>
                            <h4>{meals.strIngredient4}: {meals.strMeasure4}</h4>
                            <h4>{meals.strIngredient5}: {meals.strMeasure5}</h4>
                            <h4>{meals.strIngredient6}: {meals.strMeasure6}</h4>
                            <h4>{meals.strIngredient7}: {meals.strMeasure7}</h4>
                            <h4>{meals.strIngredient8}: {meals.strMeasure8}</h4>
                            <h4>{meals.strIngredient9}: {meals.strMeasure9}</h4>
                            
                        </div>
                        <div className="instruction">
                            <h2>Instruction</h2><br />
                            <h4>{meals.strInstructions}</h4>
                        </div>
                    </div>
                    <div className="video">
                        <iframe src={`https://www.youtube.com/embed/${vId}`}
                            title="YouTube video player" ></iframe>
                    </div>
                </div>
            ))
            }
        </div>
    )

}
export default RecipeInfo;