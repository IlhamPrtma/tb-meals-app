import React, { useState, useContext, useCallback } from "react";
import { useNavigate } from "react-router";
import { myContext } from "../context/context";
import './HomePage.scss';

const HomePage = () => {
  const [ search, setSearch ] = useState("");
  const { fetchHomePage, meals } = useContext(myContext);

  const fetchMealsHandler = useCallback(() => {
    fetchHomePage(search)
  }, [search, fetchHomePage]);
  
  let navigate = useNavigate();

  return (
    <div className="home">
      <div className="home-search" >
        <input type="text"
          placeholder="Search your meals"
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)} />
        <button className="search-btn" onClick={fetchMealsHandler}> Search Meal</button>
      </div>

      <div className="home-meals">
        {(meals) ? (
          meals.map((meals) => (
            <div className="card" key={meals.idMeal}
              onClick={() => { navigate(`/meals/${meals.idMeal}`) }}>
              <img src={meals.strMealThumb} alt="#" />
              <h3>{meals.strMeal}</h3>
            </div>
          ))
          ) : (
            <h2>No meals found, Try another word...</h2>
          )}

      </div>
    </div>
  )
}

export default HomePage