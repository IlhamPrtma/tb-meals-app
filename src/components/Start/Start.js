import React from 'react';
import './Start.scss';
import icon from './icon.png'

const Start = () => {
  return (
    <div className="start">
        <div className="start-icon"> 
            <img className="icon-app" src={icon} alt="#" /> 
            </div>
        <div className="start-name">
            <h1>Meals APP</h1>
        </div>
        
    </div>
  )
}

export default Start