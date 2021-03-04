import React from "react"




class StatePr2App extends React.Component{


    constructor(){
        super()
        this.state = {
            isLoggedIn: true
        }
    }
    render(){
        let wordDisplay
        if(this.state.isLoggedIn){
            wordDisplay ="in"
        }else{
            wordDisplay ="out"

        }
        return(
            <div>
                <h1>You are Currently logged {wordDisplay}</h1>
            </div>
        )

    }
}
export default StatePr2App