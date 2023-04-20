import React from "react";
import '../styles/CardList.css'
const CardList = function (props){

    return(
        <div className="cardList">
          <div className="name">{props.post.name}</div>
          <div className="papper">{props.post.papperCount}</div>
          <div className="glitter">{props.post.glitterCount}</div>
          <div className="holo">{props.post.holoCount}</div>
          <div className="gold">{props.post.goldCount}</div>
        </div>
    )
}


export default CardList;