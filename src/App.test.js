import React from 'react'
import ReactDOM from "react-dom"
import App from './App.js'
import Home from './containers/Home/Home.js'

describe('Testing', () => {
    it("renders App.js without crashing", () => {
    const div = document.createElement("div")
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
    })
    it("renders Home.js without crashing", () => {
        const div = document.createElement("div")
        ReactDOM.render(<Home />, div)
        ReactDOM.unmountComponentAtNode(div)
        })
})

