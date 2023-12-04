const express = require('express')
const app = express()

const data = require('./public/assets/data.json')

app.use(express.static('public'));

app.get('/', function(req, resp){
   resp.send('Hello world')
})

app.get('/list', function(req, resp){
    resp.send('List')
})

app.get('/intro', function(req, resp){
    resp.send(data["intro"])
})

app.listen(8080)