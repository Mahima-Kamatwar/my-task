import React from "react"

const DisplayEntry=(props)=>{
    return (
            <tr key={props.displayeditem.id} className="bg-gray-400">
                <th scope="row" className="px-5 py-5 font-2xl">
                    {item.name}
                </th>
                <td className="px-6 py-4">
                    {props.displayeditem.phone}
                </td>
                <td className="px-6 py-4">
                    {props.displayeditem.email}
                </td>
                <td className="px-6 py-4">
                    {props.displayeditem.address}
                </td>
                <td className="px-6 py-4">
                    {props.displayeditem.password}
                </td>
            </tr>
        )
}

export {DisplayEntry}

// What are Props?

// Props (properties) are used to send data from one component to another in React.
// They are read-only values passed from parent component ➝ child component.

// Props help in data communication between components

// Props are immutable (cannot be changed by the child)

// Props make components reusable

// Parent component controls data, child only receives and uses it
// How to Pass Props
{/* <Child name="jiya" age={34} />

    How to Receive Props
function Child(props) {
  return <h1>{props.name} - {props.age}</h1>;
} */}