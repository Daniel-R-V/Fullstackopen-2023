import React from "react"
import ReactDOM from "react-dom"

const Hello = (props) => {
    return (
        <>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </>
    )
}

const App = () => {
    const name = "Daniel"
    const age = 35.5
    return (
        <>
            <h1>Greetings</h1>
            <Hello name="Amanda" age={25 + 10} />
            <Hello name={name} age={age} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
