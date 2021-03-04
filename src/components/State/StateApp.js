import React from "react"
import {Component} from "react"

// https://scrimba.com/p/p4Mrt9/cQnMDHD

class StateApp extends React.Component {
    constructor() {
        super()
        this.state = {
            answer: "Yes"
        }
    }
    
    render() {
        
        return (
            <div>
                <h1>Is state important to know? {this.state.answer}</h1>
                
            </div>
        )
    }
}

export default StateApp