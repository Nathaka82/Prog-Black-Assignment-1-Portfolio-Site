const express = require('express')
const app = express()

const data = require('./public/assets/data.json')

app.use(express.static('public'));

app.get('/intro', function(req, resp){
    resp.send(data["intro"])
})

app.get('/projects', function(req, resp){
    resp.send(data["projects"])
})

app.get('/skills', function(req, resp){
    resp.send(data.cv.skills)
})

app.get('/education', function(req, resp){
    resp.send(data.cv.education);
})

app.get('/work_experience', function(req, resp){
    resp.send(data["cv"]["work_experience"])
})

app.get('/hobbies', function(req, resp){
    resp.send(data["cv"]["hobbies"])
})

app.listen(8080)