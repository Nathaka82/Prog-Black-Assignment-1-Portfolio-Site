# GET /cv/skills
Returns a list of JSON objects, each containing work experience done at different companies.
### Endpoint URL
`http://127.0.0.1:8080/cv/work_experience`

### Example code
```js
let response = await fetch("http://127.0.0.1:8080/cv/work_experience");
console.log(response.json());
```
#### Output:
```js
[
  {
    "company": "AMRC North West",
    "title": "Assistant Project Engineer",
    "duration": "9 Months",
    "part-time": false
  },
  {
    "company": "Durham Univeristy Spacefight Society",
    "title": "Website Team",
    "duration": "2 Months",
    "part-time": true
  },
  {
    "company": "Halilit",
    "title": "Warehouse Assistant",
    "duration": "1 Year",
    "part-time": true
  }
]
```

[Back](../cv_api.md)