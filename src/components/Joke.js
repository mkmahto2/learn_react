import React from "react"
  
function Joke(props){
    return (
        <div>
        <hr></hr>
            <h3>Question:{ props.question}</h3>
            <h3>Answer: { props.punchLine}</h3>
            <hr></hr>
        </div>
    )
}
export default Joke