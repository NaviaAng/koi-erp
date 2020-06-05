const express = require('express')
const bodyParser =  require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors());

var env = process.env.NODE_ENV || 'development';
const PORT = process.env.Port || config.server[env].port

require ('./routes')(app)

// sequelize.sync({force:true})
sequelize.sync()
.then(()=>{
    app.listen(PORT, console.log(`Server started on port ${PORT}`))
})
