# GET /projects/list:search
Returns a JSON object containing a list of projects stored in data.json.
### Endpoint URL
`http://127.0.0.1:8080/projects/list`
### Query parameters
| Name              | Type    | Description |
| :---------------- | :------ | :---------- |
| search [optional] | string  | By passing this parameter you can filter the projects by their tags. Tags should be passed in as CSVs.|

### Example code
#### No parameter:
```js
let response = await fetch("http://127.0.0.1:8080/projects/list");
console.log(response.json());
```
#### Output:
```js
[
  {
    "id": 0,
    "title": "Ascii Raycaster",
    .
    .
    .
    "tags": [
      "c#",
      "console application",
      "video game",
      "visual studio"
    ]
  },
  {
    "id": 1,
    "title": "Infini Train",
    .
    .
    .
    "tags": [
      "unity",
      "c#",
      "video game",
      "gamejam",
      "durhack",
      "24 hours"
    ]
  },
  {
    "id": 2,
    "title": "Power Plant Peril",
    .
    .
    .
    "tags": [
      "48 hours",
      "unity",
      "c#",
      "video game",
      "gamejam"
    ]
  }
]
```
------------------------------
#### With parameter:
```js
let response = await fetch("http://127.0.0.1:8080/projects/list?search=unity);
console.log(response.json());
```
#### Output:
```js
[
  {
    "id": 1,
    "title": "Infini Train",
    .
    .
    .
    "tags": [
      "unity",
      "c#",
      "video game",
      "gamejam",
      "durhack",
      "24 hours"
    ]
  }
]
```
[Back](../projects_api.md)