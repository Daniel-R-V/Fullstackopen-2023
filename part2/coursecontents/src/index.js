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
            {parts.map((part) => (
                <Part parts={part.name} exercises={part.exercises} />
            ))}
        </div>
    )
}

// const Total = ({ parts }) => {
//     return (
//         <>
//             <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
//         </>
//     )
// }

const Course = ({ course }) => {
    return (
        <>
            <Header course={course} />
            <Content parts={course.parts} />
            {/* <Total parts={course.parts} /> */}
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
