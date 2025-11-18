import { react } from "react"

import "./components/styles/style.scss"
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

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
           
        
    
  <h2>This is table</h2>
<div className="container mt-4">
  <div className="row">
    <div className="col-md-4 bg-danger text-white p-3">Column 1</div>
    <div className="col-md-4 bg-warning text-dark p-3">Column 2</div>
    <div className="col-md-4 bg-success text-white p-3">Column 3</div>
  </div>
</div>
 <Footer />
 </>
    )
  }
export default App;

