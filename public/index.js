const project_form = document.getElementById("project_form");

project_form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(project_form);
    const d = new URLSearchParams(formData).toString();
    console.log(d);

    const response = await fetch("http://127.0.0.1:8080/projects/create", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: d
    });

    RenderProjects();
})

function RenderHome(){
    fetch('http://127.0.0.1:8080/intro')
    .then(response => response.text())
    .then(body => {
        document.getElementById('title_text').innerText = "Nathaniel's Portfolio";
        document.getElementById('content').innerHTML=body;
    })
}

function RenderProjects(){
    fetch('http://127.0.0.1:8080/projects')
    .then(response => response.text())
    .then(body => {
        document.getElementById('title_text').innerText = "Projects:";
    const projects = JSON.parse(body)
    let card_holder = document.createElement("div");
    card_holder.setAttribute("id", "card_holder");
    card_holder.setAttribute("class","row")
    document.getElementById('content').innerText = body;
    projects.forEach(project => {
    let card = document.createElement("div");
    card.setAttribute("class", "card col-sm-4");
    card.setAttribute("style", "height: 26rem; width: 18rem; margin: 5px auto;");
    card.innerHTML = `
        <img class="card-img-top" src="${project.images[0]}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text" style="height: 100px; width: 100%; overflow: hidden;">${project.description}</p>
            <a href="${project.github}" class="btn btn-primary" style="width:40%">Repo</a>
            <a href="/edit?id=${project.id}" class="btn btn-primary" style="width:40%">Edit</a>
        </div>`
    card_holder.appendChild(card);
    });

    let card = document.createElement("div");
    card.setAttribute("class", "card col-sm-4");
    card.setAttribute("style", "height: 26rem; width: 18rem; margin: 5px auto;");
    card.innerHTML = `
        <img class="card-img-top" src="./assets/images/new_project_card.png" alt="Card image cap">
        <div class="card-body" style="text-align:center">
            <h5 class="card-title">New Project</h5>
            <br>
            <br>
            <a href="#projectModal" class="btn btn-primary" style="background-color: green" data-bs-toggle="modal">Create</a>
        </div>`
    card_holder.appendChild(card);

    document.getElementById('content').replaceChildren(card_holder);
    })
}

function RenderSkills(){
    fetch('http://127.0.0.1:8080/cv/skills')
    .then(response => response.text())
    .then(body => {
        document.getElementById('title_text').innerText = "CV: Skills";
        const skills = JSON.parse(body)
        let skills_list = document.createElement("ul");
        skills.forEach(skill => {
            skill_element = document.createElement("li");
            skill_element.innerText = skill;
            skills_list.appendChild(skill_element);
        });
    document.getElementById('content').replaceChildren(skills_list);
    })
}

function RenderEducation(){
    fetch('http://127.0.0.1:8080/cv/education')
    .then(response => response.text())
    .then(body => {
        document.getElementById('title_text').innerText = "CV: Education";
        const education_data = JSON.parse(body)
        let content = document.createElement("div");
        education_data.forEach(data => {
            let title = document.createElement("h4");
            title.textContent = `${data.level} (${data.board}): ${data.school}`;
            let results = document.createElement("ul");
            for (var subject in data.results) {
                result_data = document.createElement("li");
                let subject_name = subject.replaceAll("_", " ");
                subject_name = subject_name[0].toUpperCase() + subject_name.substring(1);
                result_data.innerText = `${subject_name}: ${data.results[subject]}`;
                results.appendChild(result_data);
            }
            content.appendChild(title);
            content.appendChild(results);
        });
        document.getElementById('content').replaceChildren(content);
    });
}

function RenderWorkExperience(){
    fetch('http://127.0.0.1:8080/cv/work_experience')
    .then(response => response.text())
    .then(body => {
        document.getElementById('title_text').innerText = "CV: Work Experience";
        const work_experience_data = JSON.parse(body);
        let content = document.createElement("div");
        work_experience_data.forEach(data => {
            let company_name = document.createElement("h4");
            company_name.innerText = data.company;
            let details = document.createElement("p");
            details.innerText = `Title: ${data.title} \n Duration: ${data.duration}`;
            content.appendChild(company_name);
            content.appendChild(details);
        });
        document.getElementById('content').replaceChildren(content);
   });
}

function RenderHobbies(){
    fetch('http://127.0.0.1:8080/cv/hobbies')
    .then(response => response.text())
    .then(body => {
        document.getElementById('title_text').innerText = "CV: Hobbies";
        const hobbies = JSON.parse(body)
        let hobbies_list = document.createElement("ul");
        hobbies.forEach(hobby => {
            hobby_element = document.createElement("li");
            hobby_element.innerText = hobby;
            hobbies_list.appendChild(hobby_element);
        });
       document.getElementById('content').replaceChildren(hobbies_list);
    })
}

function RenderContact(){
    fetch('http://127.0.0.1:8080/cv/contact')
    .then(response => response.text())
    .then(body => {
        document.getElementById('title_text').innerText = "CV: Contact";
        const info = JSON.parse(body);
        let info_list = document.createElement("ul");
        for(var mode in info){
            let name = mode.replaceAll("_", " ");
            name = name[0].toUpperCase() + name.substring(1);
            let info_element = document.createElement("li");
            info_element.innerText = `${name}: ${info[mode]}`
            info_list.appendChild(info_element);
        }
       document.getElementById('content').replaceChildren(info_list);
    })
}