import React, { useEffect, useState } from "react";
import '../styles/FirstCardLine.css'
import CardList from "./CardList";
const FirstCardLine = function({ onSort }) {

    const handleClick = (event) => {
        onSort(event.target.value);
      };
    

    return(
        <div className="cardList">
          <div className="name">name</div>
          <button className="papper" onClick={handleClick} value="papperCount">papper</button>
          <button className="glitter" onClick={handleClick} value="glitterCount">glitter</button>
          <button className="holo" onClick={handleClick} value="holoCount">holo</button>
          <button className="gold" onClick={handleClick} value="goldCount">gold</button>
        </div>
    )
} 

export default FirstCardLine;