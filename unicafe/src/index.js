import React, { useState } from "react"
import ReactDOM from "react-dom"

const Button = ({ handleGoodClick, handleNeutralClick, handleBadClick }) => {
    return (
        <>
            <button onClick={handleGoodClick}>good</button>
            <button onClick={handleNeutralClick}>neutral</button>
            <button onClick={handleBadClick}>bad</button>
        </>
    )
}

const Statistic = ({ text, value }) => {
    return (
        <h3>
            {text} {value}
        </h3>
    )
}

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = (good / all) * 100

    return all === 0 ? (
        <>
            <h1>statistics</h1>
            <p>No feedback given</p>
        </>
    ) : (
        <>
            <h1>statistics</h1>

            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />

            <h3>all {all}</h3>
            <h3>average {average}</h3>
            <h3>positive {positive}%</h3>
        </>
    )
}

const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClick = () => {
        setGood(good + 1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClick = () => {
        setBad(bad + 1)
    }

    return (
        <div>
            <h1>give feedback</h1>

            <Button handleGoodClick={handleGoodClick} handleNeutralClick={handleNeutralClick} handleBadClick={handleBadClick} />
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
