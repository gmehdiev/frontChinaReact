import React, { useEffect, useState } from "react";
import '../styles/Card.css'
import CardList from "./CardList";
import FirstCardLine from "./FirstCardLine";

import axios from 'axios'
const Card = function (prop){
    
  const [posts, setPosts] = useState([]);

  useEffect(() => {
      axios
        .get("http://localhost:3001/capsules")
        .then((response) => {
          const data = response.data.filter((e) => e.capsuleNameEN === prop.capsuleName && e.majorName === prop.selectedMajor);
          setPosts(data);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, [prop.selectedMajor]);

   const handleSort = (property) => {
    setPosts([...posts].sort((a, b) => b[property] - a[property]));
  };

    return(
        <div className="card">
        <div className="cardInfo">
          <div className="cardPhoto"><img src="https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXU5A1PIYQNqhpOSV-fRPasw8rsQEl9Jg9SpIW1KgRr7ODcfj5J5I7mxtG0m_LzNrXVhVRd6dd2j6fHpNTw3gDnqUprNmz6JtfHcVVsZQ7T8ge7wu_shMK1tM7AzXNr7nZ2-z-DyGsYtNgt/360fx360f" alt="portlandlogo"/></div>
          <div className="cardName">asd</div>
        </div>
        <FirstCardLine onSort={handleSort} />
        {posts.map(post =>
                    <CardList post={post}  key={post["_id"]}/>
                )
                }
      </div>

    )
}


export default Card;