# GET /cv/skills
Returns the list of skills contained in data.json
### Endpoint URL
`http://127.0.0.1:8080/cv/skills`

### Example code
```js
let response = await fetch("http://127.0.0.1:8080/cv/skills");
console.log(response.json());
```
#### Output:
```js
["Fast Learner","Hard Working","Problem Solver"]
```

[Back](../cv_api.md)