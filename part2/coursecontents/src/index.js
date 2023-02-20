import React from "react"
import ReactDOM from "react-dom"

const Header = ({ course }) => {
    return <h1>{course.name}</h1>
}

const Part = ({ parts, exercises }) => {
    return (
        <p>
            {parts} {exercises}
        </p>
    )
}

const Content = ({ parts }) => {
    return (
        <div>
            {parts.map((part, index) => (
                <Part key={index} parts={part.name} exercises={part.exercises} />
            ))}
        </div>
    )
}

const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <>
            <p>Number of exercises {totalExercises}</p>
        </>
    )
}

const Course = ({ course }) => {
    return (
        <>
            <Header course={course} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </>
    )
}

const App = () => {
    const course = {
        name: "Half Stack application development",
        parts: [
            {
                name: "Fundamentals of React",
                exercises: 10
            },
            {
                name: "Using props to pass data",
                exercises: 7
            },
            {
                name: "State of a component",
                exercises: 14
            }
        ]
    }

    return (
        <>
            <Course course={course} />
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
