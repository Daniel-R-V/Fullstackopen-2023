import React, { useState } from "react"
import ReactDOM from "react-dom"

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = (good / all) * 100

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
            <h3>all {all}</h3>
            <h3>average {average}</h3>
            <h3>positive {positive}%</h3>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
