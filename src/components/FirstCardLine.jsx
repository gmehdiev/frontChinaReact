import React, { useEffect, useState } from "react";
import '../styles/FirstCardLine.css'
import CardList from "./CardList";
const FirstCardLine = function() {

    return(
        <div className="cardList">
          <div className="name">name</div>
          <button className="papper">papper</button>
          <button className="glitter">glitter</button>
          <button className="holo">holo</button>
          <button className="gold">gold</button>
        </div>
    )
} 

export default FirstCardLine;