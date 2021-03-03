import React from "react"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import App1 from "./components/App1"
import Good from "./components/Good"
import TodoItem from "./components/TodoItem"
import Todo from "./Todo"
import ContactCard from "./components/ContactCard"
import AppContactCard from "./components/AppContactCard"
import AppJoke from "./components/AppJoke"
import Joke from "./components/Joke"
import MapApp from "./components/MapApp"
function App() {
    return (
        <div>
            <Header />
            <MainContent />
            
            <Good />
            <App1 / >
            <Footer />
            <Todo />
            
            <AppContactCard />
            <AppJoke />
            <MapApp />

        </div>
        
    )
}

export default App