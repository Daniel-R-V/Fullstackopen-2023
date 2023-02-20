import React, { useState } from "react"
import ReactDOM from "react-dom"

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    return (
        <div>
            <h1>give feedback</h1>

            <button onClick={() => setGood(good + 1)}>good</button>
            <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
            <button onClick={() => setBad(bad + 1)}>bad</button>

            <h1>statistics</h1>

            <h3>good {good}</h3>
            <h3>neutral {neutral}</h3>
            <h3>bad {bad}</h3>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
