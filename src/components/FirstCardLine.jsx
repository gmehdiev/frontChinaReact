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
          <button className="quality papperbtn" onClick={handleClick} value="papperCount">papper</button>
          <button className="quality glitterbtn" onClick={handleClick} value="glitterCount">glitter</button>
          <button className="quality holobtn" onClick={handleClick} value="holoCount">holo</button>
          <button className="quality goldbtn" onClick={handleClick} value="goldCount">gold</button>
        </div>
    )
} 

export default FirstCardLine;