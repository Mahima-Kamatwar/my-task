// import and export statements
// require(Before ES6) & import/export(After ES6)

// scope instance = require("dependency")

// const express = require("express")

import express from "express"

const app = express()

let port = 5011

app.get("/", (req, res) => {
    res.send("welcome to our link")
})

app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})

// http://localhost:5011
// welcome to our link