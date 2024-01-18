const express = require('express')
const app = express()

const data = require('./public/assets/data.json')

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

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

app.post("/projects/create", function(req, resp){
    project = {
        "id": data["projects"].slice(-1)[0].id + 1,
        "title": req.body.title,
        "description": req.body.description,
        "github": req.body.github,
        "links": [],
        "images": [`./assets/images/StockBackgrounds/${Math.floor(Math.random() * 5) + 1}.jpg`],
        "content": ".txt"
    };
    data["projects"].push(project);
    resp.sendStatus(200);
})

app.listen(8080) 