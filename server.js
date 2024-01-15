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

app.get('/cv/skills', function(req, resp){
    resp.send(data.cv.skills)
})

app.get('/cv/education', function(req, resp){
    resp.send(data.cv.education);
})

app.get('/cv/work_experience', function(req, resp){
    resp.send(data["cv"]["work_experience"])
})

app.get('/cv/hobbies', function(req, resp){
    resp.send(data["cv"]["hobbies"])
})

app.get('/cv/contact', function(req, resp){
    resp.send(data["cv"]["contact"])
})

//app.post("/project/create")

app.listen(8080) 