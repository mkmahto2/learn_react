import React from 'react'

function handleClick(){
    console.log("I was Clicked")
}


function EventApp(){
    return(
        <div>
            <img onMouseOver ={() => console.log("Hovered")}
            src="https://www.fillmurray.com/200/100"/>
            <br/><br/>
            <button onClick={handleClick}>Click Me</button>

        </div>
    )
}
export default EventApp