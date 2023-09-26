import React from 'react'
import "./card.css"
const card = ({category}) => {
    return (
        <div className="doctors-card">
          <img src={`./images/${category}.jpg`} alt="" />
          <h3>{category}</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, ab.</p>
        </div>
      );
}

export default card