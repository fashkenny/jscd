const express = require('express');

const port = 200
const app = express()

app.use(express.json())
app.get('/', (req, res) => {
    res.status(200).json({
        message: "server is  running"
    })
})

app.listen(port, () =>{
    console.log("Server listening on port and now Live ", port)
})