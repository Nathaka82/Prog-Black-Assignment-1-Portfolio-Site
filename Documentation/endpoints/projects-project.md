# GET /projects/project:id
Returns a JSON object representing a project.
### Endpoint URL
`http://127.0.0.1:8080/projects/project?id=PROJECT_ID`
### Query parameters
| Name              | Type    | Description |
| :---------------- | :------ | :---------- |
| id [required] | int  | Tells the server which project to return.|

### Example code
```js
let response = await fetch("http://127.0.0.1:8080/projects/project?id=0");
console.log(response.json());
```
#### Output:
```js
{
  "id": 1,
  "title": "Infini Train",
  "description": "An infinite roguelike game made with Unity for Durhack 2023.",
  "github": "https://github.com/Nathaka82/Durhack-2023",
  "links": [
    "https://durhack.com/",
    "https://devpost.com/software/infini-train"
  ],
  "images": [
    "./assets/images/infini_card.png"
  ],
  "tags": [
    "unity",
    "c#",
    "video game",
    "gamejam",
    "durhack",
    "24 hours"
  ]
}
```
[Back](../projects_api.md)