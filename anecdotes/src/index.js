import React, { useState } from "react"
import ReactDOM from "react-dom"

const App = ({ anecdotes }) => {
    const [selected, setSelected] = useState(0)
    const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])
    const highestPoints = Math.max(...points)
    const winnerIndex = points.indexOf(highestPoints)
    const winner = anecdotes[winnerIndex]

    const handleVoteAnecdote = () => {
        const newPoints = [...points]
        newPoints[selected] += 1
        setPoints(newPoints)
    }

    const handleSelectAnecdote = () => {
        const minimum = 1
        const maximum = 5
        const difference = maximum - minimum

        setSelected(Math.floor(Math.random() * difference + minimum))
    }

    return (
        <>
            <h1>Anecdote of the day</h1>

            <div>{anecdotes[selected]}</div>
            <div>has {points[selected]} votes</div>
            <button onClick={handleVoteAnecdote}>vote</button>
            <button onClick={handleSelectAnecdote}>next anecdote</button>

            <h1>Anecdote with most votes</h1>
            <div>{winner}</div>
            <div>has {highestPoints} votes</div>
        </>
    )
}

const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
]

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById("root"))
