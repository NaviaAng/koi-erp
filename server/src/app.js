const express = require('express')
const bodyParser =  require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req,res) => {
    res.send({
        message : "Start ibs-online"
    })
})

app.post('/register', (req,res) => {
    res.send({
        message : `Hello ${req.body.email}, Your User was registered! Have fun!`,
        status : "OK"
    })
})

app.get('/status', (req,res) => {
    res.send({
        message : "hello ibs-online",
        status : "OK"
    })
})

const PORT = process.env.Port || 8081
app.listen(PORT, console.log(`Server started on port ${PORT}`))
