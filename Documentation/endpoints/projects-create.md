# POST /projects/create
Returns a JSON object containing a list of projects stored in data.json.
### Endpoint URL
`http://127.0.0.1:8080/projects/create`
### JSON body parameters
| Name              | Type    | Description |
| :---------------- | :------ | :---------- |
| title [required] | string  | The title of the new project|
| description [optional] | string  | A short description about the project|
| github [optional] | string  | A link to the projects github repository|
| tags [optional] | string  | A comma separated list of useful tags that identify the project|
| github [optional] | string  | A link to the projects github repository|

### Example code
```js
// All paramaters are passed in in HTML Form shown below
const projectForm = document.getElementById('project_form');
projectForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(projectForm);

    const d = new URLSearchParams(formData).toString();

    const response = await fetch('http://127.0.0.1:8080/projects/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: d
    });
});
```
### HTML Form
```html
<form id="project_form">
  <div class="mb-3">
    <label for="project_title" class="form-label">Project Title</label>
    <input name="title" type="text" class="form-control" id="project_title" aria-describedby="project title" autocomplete="off" required>
  </div>
  <div class="mb-3">
    <label for="project_description" class="form-label">Description</label>
    <input name="description" type="text" class="form-control" id="project_description" autocomplete="off">
    <div id="description_help" class="form-text">A short description of the project</div>
  </div>
  <div class="mb-3">
    <label for="github_link" class="form-label">Github</label>
    <input name="github" type="url" placeholder="https://github.com/USER/REPOSITORY" class="form-control" id="github_link" autocomplete="off">
    <div id="github_help" class="form-text">Link to the projects Github Repostitory</div>
  </div>
  <div class="mb-3">
    <label for="project_tags" class="form-label">Tags</label>
    <input name="tags" type="text" class="form-control" id="project_tags" autocomplete="off">
    <div id="tags_help" class="form-text">Add useful tags to your project</div>
  </div>
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
  <button type="submit" id="save_project_button" data-bs-dismiss="modal" class="btn btn-primary">Save Project</button>
</form>
```
[Back](../projects_api.md)