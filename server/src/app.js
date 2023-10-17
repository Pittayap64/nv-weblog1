let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
const {sequelize} = require('./models')

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

require('./route')(app)
   
    app.get('/status', function (req, res) {
        res.send('Hello Nodejs server')
    })   