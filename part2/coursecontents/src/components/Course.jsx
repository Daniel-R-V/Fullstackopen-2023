import React from "react"

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
                <Part key={part.id} parts={part.name} exercises={part.exercises} />
            ))}
        </div>
    )
}

const Total = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
        <>
            <p>Total of {totalExercises} exercises</p>
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

export default Course
