// in terminal: type ' npm run install-all '


const express = require("express")
const app = express()
const port = 3003

console.log("wassup")

// start listening
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})

app.get("/", (req, res) => {
    res.send("wow")
})