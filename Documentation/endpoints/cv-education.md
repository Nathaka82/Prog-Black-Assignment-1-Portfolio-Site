# GET /cv/skills
Returns a list of JSON objects, each containing information regarding schools, subjects and results.
### Endpoint URL
`http://127.0.0.1:8080/cv/education`

### Example code
```js
let response = await fetch("http://127.0.0.1:8080/cv/education");
console.log(response.json());
```
#### Output:
```js
[
  {
    "level": "GCSE",
    "school": "Clitheroe Royal Grammar School",
    "board": "AQA",
    "results": {
      "mathematics": 9,
      "physics": 9,
      "chemistry": 9,
      "geography": 8,
      "biology": 8,
      "computer_science": 9,
      "design_and_technology": 8,
      "german": 5,
      "english_language": 7,
      "english_literature": 6
    }
  },
  {
    "level": "A-Level",
    "school": "Clitheroe Royal Grammar School Sixthform",
    "board": "AQA",
    "results": {
      "mathematics": "A*",
      "further_mathematics": "A*",
      "computer_science": "A*",
      "physics": "A*"
    }
  },
  {
    "level": "University",
    "school": "Durham University",
    "board": "N/A",
    "results": {}
  }
]
```

[Back](../cv_api.md)