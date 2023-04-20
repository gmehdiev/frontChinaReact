import React from "react";
import '../styles/CardList.css'
const CardList = function (props){

    return(
        <div className="cardList">
          <div className="name">{props.post.name}</div>
          <div className="quality papper">{props.post.papperCount}</div>
          <div className="quality glitter">{props.post.glitterCount}</div>
          <div className="quality holo">{props.post.holoCount}</div>
          <div className="quality gold">{props.post.goldCount}</div>
        </div>
    )
}


export default CardList;