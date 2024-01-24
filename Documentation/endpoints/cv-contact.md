# GET /cv/skills
Returns a JSON object containing contact information for John Smith
### Endpoint URL
`http://127.0.0.1:8080/cv/contact`

### Example code
```js
let response = await fetch("http://127.0.0.1:8080/cv/contact");
console.log(response.json());
```
#### Output:
```js
{"mobile":"+44 1234567890","email":"example@gmail.com"}
```

[Back](../cv_api.md)