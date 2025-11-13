import { react } from "react"
import Header from "./Header";

const Comp1 = () => {
    return (
        <>
            <Header />
            <h1>this is comp1</h1>


            <ul>
                <li style={{ color: "green", backgroundColor: "pink",padding:"1rem",margin:"30px" }}>item1</li>
                <li style={{ color: "green", backgroundColor: "pink",padding:"1rem",margin:"40px" }}>item2</li>
                <li style={{ color: "green", backgroundColor: "pink",padding:"1rem",margin:"50px" }}>item3</li>
            </ul>
        </>
    )
}

export default Comp1;