import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import App1 from "./components/App1"
import Good from "./components/Good"
import ToApp from "./ToApp"
import AppClass from "./components/AppClass"
import StateApp from "./components/State/StateApp"
import StatePr1App from "./components/StatePr1/StatePr1App"




function App() {
    return (
        <div>
            <Header />
            <MainContent />
            
            <Good />
            <App1 / >
            <ToApp />
            <Footer />
            
<AppClass />

<StateApp />
<StatePr1App />
        </div>
        
    )
}

export default App