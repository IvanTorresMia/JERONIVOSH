import React from 'react';
import "./style.css"


function Image({ user, story }) {
    console.log(story[user.level]);
    return (
     <div>
      
        <img src={story[user.level].image}></img>
        </div>
    )
}

export default Image;