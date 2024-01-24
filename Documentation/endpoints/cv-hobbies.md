# GET /cv/skills
Returns the list of hobbies contained in data.json
### Endpoint URL
`http://127.0.0.1:8080/cv/hobbies`

### Example code
```js
let response = await fetch("http://127.0.0.1:8080/cv/hobbies");
console.log(response.json());
```
#### Output:
```js
["Table Tennis","Ultimate Frisbee","Basketball","Programming","Video Games","Badminton","Calisthenics"]
```

[Back](../cv_api.md)