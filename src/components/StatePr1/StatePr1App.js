import React , {Component} from "react"




class StatePr1App extends Component{
    constructor(){
        super()
        this.state = {
            name: "Sally",
            age: 21
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age}</h3>

            </div>
        )
    }
}
export default StatePr1App
