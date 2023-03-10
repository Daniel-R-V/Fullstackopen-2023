import React from "react"
import ReactDOM from "react-dom"
import Countries from "./components/Countries"
import "./index.css"

const App = () => {
    return <Countries />
}

export default App

ReactDOM.render(<App />, document.getElementById("root"))
