const express = require("express")
const app = express()
const port = 3000

console.log("wassup")


// start listening
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})