import React from 'react';
import Start from './components/Start/Start';
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/HomePage';
import Categories from './components/Categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';
import RecipeInfo from './components/RecipeInfo/RecipeInfo';
import CategoriesInfo from './components/CategoriesInfo/CategoriesInfo';
import About from './components/About/About';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { GiMeal  } from "react-icons/gi";
import { BiFoodMenu } from "react-icons/bi";
import { FaRandom } from "react-icons/fa";
import "./App.css";


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
        <Route exact path ="/" element = {<Start/>}/>
          <Route exact path ="/meals" element = {<HomePage/>}/>
          <Route exact path='/meals/:MealId' element={<RecipeInfo />} />
          <Route exact path ="/categories" element = {<Categories/>}/>
          <Route exact path='/categories/:strCategory' element={<CategoriesInfo />} />
          <Route exact path ="/random" element = {<RandomMeal/>}/>
          <Route exact path ="/about" element = {<About/>}/>
        </Routes>

        <footer>
        <NavLink to="/meals" className="iconWrapper">
          <GiMeal className="icon" />
          Meals
        </NavLink>
        <NavLink to="/categories" className="iconWrapper">
          <BiFoodMenu className="icon" />
          Categories
        </NavLink>
        <NavLink to="/random" className="iconWrapper">
          <FaRandom className="icon" />
          Random
        </NavLink>
      </footer>
      </Router>
    </div>
  );
}

export default App;
