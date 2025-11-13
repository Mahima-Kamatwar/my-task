import { react } from "react"

import "./components/styles/style.scss"

import Comp1 from "./components/Comp1"
import Comp2 from "./components/Comp2"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {

    return (
        <>
            <Header />
            <h1 style={{
                color: "yellow",
                background: "black"
            }}>this is inline css heading</h1>
           
            <Comp1 />
            <Comp2 />
            <Footer />
        </>
    )
}

export default App;

