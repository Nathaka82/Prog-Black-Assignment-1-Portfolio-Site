const express = require('express');
const path = require('path');
const app = express();

const data = require(path.resolve("public", "assets", "data.json"));

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/intro', function(req, resp){
    resp.send(data.intro);
})

app.get('/projects/list', function(req, resp){
    let search = req.query.search;
    if (search == undefined || search == "-1")
    {
        resp.send(data.projects);
    }
    else if (search.length > 0){
        let projects = [];
        let tags = search.toLowerCase().split(/\s*,\s*/);
        data.projects.forEach(project => {
            // https://www.geeksforgeeks.org/how-to-find-if-two-arrays-contain-any-common-item-in-javascript/
            if(project.tags.some(tag => tags.includes(tag))){
                projects.push(project);
            }
        });
        resp.send(projects);
    }
    else {
        resp.send(data.projects);
    }
})

app.get('/projects/project', function(req, resp){
    let id = req.query.id;
    let project = data.projects.find((p) => p.id == id);
    if (project != undefined) {
        resp.send(project);
    }
    else {
        resp.sendStatus(404);
    }
})

app.get('/projects/tags', function(req, resp){
    let tags = []
    data.projects.forEach(project => {
        tags.push(...project.tags);
    })
    let distinct = [...new Set(tags)];
    resp.send(distinct);
})

app.get('/cv/skills', function(req, resp){
    resp.send(data.cv.skills)
})

app.get('/cv/education', function(req, resp){
    resp.send(data.cv.education);
})

app.get('/cv/work_experience', function(req, resp){
    resp.send(data.cv.work_experience)
})

app.get('/cv/hobbies', function(req, resp){
    resp.send(data.cv.hobbies)
})

app.get('/cv/contact', function(req, resp){
    resp.send(data.cv.contact)
})

app.post("/projects/create", function(req, resp){
    if (req.query == undefined){
        resp.sendStatus(501);
        return
    } 
    let project = {
        "id": data.projects.slice(-1)[0].id + 1,
        "title": req.body.title,
        "description": req.body.description,
        "github": req.body.github,
        "links": [],
        "images": [path.join("assets", "images", "StockBackgrounds", `${Math.floor(Math.random() * 5) + 1}.jpg`)],
        "content": ".txt",
        "tags": req.body.tags.toLowerCase().split(/\s*,\s*/)
    };
    data["projects"].push(project);
    resp.sendStatus(200);
})

module.exports = app