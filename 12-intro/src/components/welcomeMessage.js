import React from "react";

function WelcomeMessage(){
    const name = "Mike"
    const lastname = "TV"

    return (
        <div>
            <h2>Ласкаво просимо!</h2>
            <p>Користувач: {name} {lastname}</p>
        </div>
    )    
}



export default WelcomeMessage