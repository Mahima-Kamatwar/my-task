import React, { useState } from "react"
import Comp1 from "./components/comp1"

const App = () => {
  const [toShow, setToShow] = useState(false)

//  toShow → stores true/false
// Initially it is false
// setToShow → a function used to change the value

  const [profile, setProfile] = useState({
    name: "mahima kamatwar",
    contact: "9022836145",
    email: "mahima5@gmail.com",
    address: "bahadura nagpur 440024",
  })

  const handleClick = () => {
    setToShow((prev) => !prev);
  }

  return (
    <div className="p-5 m-5">
      <Comp1 />

      {/* Toggle message */}
      {toShow ? 
        <h1 className="bg-red-500 text-black px-5 py-3 inline absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold">
          hello!
        </h1>:null
      }

      {/* Profile Table */}
      {profile.name ? 
        <div>
          <table className="table border-2 border-collapse">
            <thead>
              <tr>
                <th>Name</th>
                <th>Contact</th>
                <th>Email</th>
                <th>Address</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{profile.name}</td>
                <td>{profile.contact}</td>
                <td>{profile.email}</td>
                <td>{profile.address}</td>
              </tr>
            </tbody>
          </table>
        </div>: 
        <h1>empty profile !</h1>
      }

      <button
        onClick={handleClick}
        className="bg-blue-500 px-3 py-2 mt-5 font-bold text-white"
      >
        Toggle
      </button>
    </div>
  )
}

export default App
