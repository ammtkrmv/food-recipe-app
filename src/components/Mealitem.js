import React from "react";
import Meal from "./Meal";
const Mealitem=(getMeal)=>{
    console.log(getMeal.data)
    return(
        <>
            <div className="card">
                <img alt="" src={getMeal.data.strMealThumb}></img>
                <div className="info">
                    <h2>{getMeal.data.strMeal}</h2>
                    <p>{getMeal.data.strArea} food</p>
                </div>
                <div className="recipe">
                    <h2>Recipe</h2>
                    <p>{getMeal.data.strInstructions}</p>
                    <img alt="" src={getMeal.data.strMealThumb}></img>
                    <a href={getMeal.data.strSource}>Watch video</a>
                </div>
            </div>
        </>
    )
}
export default Mealitem; 