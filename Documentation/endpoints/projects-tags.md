# GET /projects/tags
Returns a list of all the tags accross all the projects
### Endpoint URL
`http://127.0.0.1:8080/projects/tags`

### Example code
```js
let response = await fetch("http://127.0.0.1:8080/projects/tags");
console.log(response.json());
```
#### Output:
```js
["c#","console application","video game","visual studio","unity","gamejam","durhack","24 hours","48 hours"]
```
[Back](../projects_api.md)