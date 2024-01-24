/* eslint-disable no-unused-vars */
const projectForm = document.getElementById('project_form');

// https://github.com/stevenaeola/progblack_2324/blob/main/gordonramsay/client/fact-submit.js
projectForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(projectForm);

    // Got URLSearchParams from ChatGPT
    const d = new URLSearchParams(formData).toString();

    const response = await fetch('http://127.0.0.1:8080/projects/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: d
    });

    if (!response.ok) {
        RenderError(response.status);
        return;
    }

    RenderProjects();
});

function SearchProjects () {
    RenderProjects(document.getElementById('project_search').value.toString());
}

function RenderError (code) {
    document.getElementById('title_text').innerText = `Error: ${code}`;
    document.getElementById('content').innerHTML = '<p style="width:50%; text-align:center; margin:auto">There was a problem fetching your content!</p>';
}

async function RenderHome () {
    ChangeFavicon('assets/images/favicon.ico');
    let response = {};
    try {
        response = await fetch('http://127.0.0.1:8080/intro');
    } catch (error) {
        RenderError('Could not connect to Server.');
        return;
    }

    if (!response.ok) {
        RenderError(response.status);
        return;
    }
    document.getElementById('title_text').innerText = "Nathaniel's Portfolio";
    document.getElementById('content').innerHTML = `<p style="width:50%; text-align:center; margin:auto">${await response.text()}</p>`;
}

async function RenderProject (id) {
    let response = {};
    try {
        response = await fetch(`http://127.0.0.1:8080/projects/project?id=${id}`);
    } catch (error) {
        RenderError('Could not connect to Server.');
        return;
    }

    if (!response.ok) {
        RenderError(response.status);
        return;
    }

    const project = await response.json();
    ChangeFavicon(project.images[0]);
    document.getElementById('title_text').innerText = 'Projects:';
    const content = document.createElement('div');
    const images = document.createElement('div');
    const row = document.createElement('div');
    content.setAttribute('class', 'col-lg-6');
    images.setAttribute('class', 'col-lg-6');
    row.setAttribute('class', 'row');
    let tags = '';
    project.tags.forEach(tag => {
        tags += `<span class="badge text-bg-secondary">${tag}</span>\n`;
    });
    content.innerHTML =
    `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <br>
        ${tags}
    `;
    project.images.forEach(image => {
        images.innerHTML += `<img src=${image} alt="project image" style="margin:auto; padding:5px; max-width: 100%; height: auto;"/>`;
    });
    row.appendChild(content);
    row.appendChild(images);
    document.getElementById('content').replaceChildren(row);
}

async function RenderProjects (search) {
    let endpoint = 'http://127.0.0.1:8080/projects/list';
    if (search !== undefined) {
        endpoint = `http://127.0.0.1:8080/projects/list?search=${encodeURIComponent(search)}`;
    }

    ChangeFavicon('assets/images/favicon.ico');
    let response = {};
    try {
        response = await fetch(endpoint);
    } catch (error) {
        RenderError('Could not connect to Server.');
        return;
    }
    if (!response.ok) {
        RenderError(response.status);
        return;
    }
    document.getElementById('title_text').innerText = 'Projects:';
    const projects = await response.json();
    const cardHolder = document.createElement('div');
    cardHolder.setAttribute('id', 'card_holder');
    cardHolder.setAttribute('class', 'row');
    projects.forEach(project => {
    const card = document.createElement('div');
    card.setAttribute('class', 'card col-sm-4');
    card.setAttribute('style', 'height: 27rem; width: 18rem; margin: 5px auto;');
    let tags = '';
    project.tags.forEach(tag => {
        tags += `<span class="badge text-bg-secondary">${tag}</span>\n`;
    });
    const githubLink = project.github !== '' ? `<a href="${project.github}" class="btn btn-primary" style="width:40%">Github</a>` : '';
    // Card layout from https://getbootstrap.com/docs/4.0/components/card/
    card.innerHTML = `
        <img class="card-img-top" src="${project.images[0]}" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${project.title}</h5>
            <p class="card-text" style="height: 100px; width: 100%; overflow: hidden;">${project.description}</p>
            <a onclick="RenderProject(${project.id})" class="btn btn-primary" style="width:40%">Open</a>
            ${githubLink}
            <br>
            <div class="hide-scroll" style="height: 50px; width:100%; overflow-x: auto; white-space: nowrap;">
                ${tags}
            </div>
        </div>`;
    cardHolder.appendChild(card);
    });

    const card = document.createElement('div');
    card.setAttribute('class', 'card col-sm-4');
    card.setAttribute('style', 'height: 26rem; width: 18rem; margin: 5px auto;');
    card.innerHTML = `
        <img class="card-img-top" src="assets/images/new_project_card.png" alt="Card image cap">
        <div class="card-body" style="text-align:center">
            <h5 class="card-title">New Project</h5>
            <br>
            <br>
            <a href="#projectModal" class="btn btn-primary" style="background-color: green" data-bs-toggle="modal">Create</a>
        </div>`;
    cardHolder.appendChild(card);

    document.getElementById('content').replaceChildren(cardHolder);
}

async function RenderSkills () {
    ChangeFavicon('assets/images/favicon.ico');
    let response = {};
    try {
        response = await fetch('http://127.0.0.1:8080/cv/skills');
    } catch (error) {
        RenderError('Could not connect to Server.');
        return;
    }

    if (!response.ok) {
        RenderError(response.status);
        return;
    }
    document.getElementById('title_text').innerText = 'CV: Skills';
    const skills = await response.json();
    const skillsList = document.createElement('ul');
    skills.forEach(skill => {
        const skillElement = document.createElement('li');
        skillElement.innerText = skill;
        skillsList.appendChild(skillElement);
    });
    document.getElementById('content').replaceChildren(skillsList);
}

async function RenderEducation () {
    ChangeFavicon('assets/images/favicon.ico');
    let response = {};
    try {
        response = await fetch('http://127.0.0.1:8080/cv/education');
    } catch (error) {
        RenderError('Could not connect to Server.');
        return;
    }
    if (!response.ok) {
        RenderError(response.status);
        return;
    }
    document.getElementById('title_text').innerText = 'CV: Education';
    const educationData = await response.json();
    const content = document.createElement('div');
    educationData.forEach(data => {
        const title = document.createElement('h4');
        title.textContent = `${data.level} (${data.board}): ${data.school}`;
        const results = document.createElement('ul');
        for (const subject in data.results) {
            const resultData = document.createElement('li');
            let subjectName = subject.replaceAll('_', ' ');

            subjectName = subjectName[0].toUpperCase() + subjectName.substring(1);
            resultData.innerText = `${subjectName}: ${data.results[subject]}`;
            results.appendChild(resultData);
        }
        content.appendChild(title);
        content.appendChild(results);
    });
    document.getElementById('content').replaceChildren(content);
}

async function RenderWorkExperience () {
    ChangeFavicon('assets/images/favicon.ico');
    let response = {};
    try {
        response = await fetch('http://127.0.0.1:8080/cv/work_experience');
    } catch (error) {
        RenderError('Could not connect to Server.');
        return;
    }
    if (!response.ok) {
        RenderError(response.status);
        return;
    }
    document.getElementById('title_text').innerText = 'CV: Work Experience';
    const workExperienceData = await response.json();
    const content = document.createElement('div');
    workExperienceData.forEach(data => {
        const companyName = document.createElement('h4');
        companyName.innerText = data.company;
        const details = document.createElement('p');
        details.innerText = `Title: ${data.title} \n Duration: ${data.duration}`;
        content.appendChild(companyName);
        content.appendChild(details);
    });
    document.getElementById('content').replaceChildren(content);
}

async function RenderHobbies () {
    ChangeFavicon('assets/images/favicon.ico');
    let response = {};
    try {
        response = await fetch('http://127.0.0.1:8080/cv/hobbies');
    } catch (error) {
        RenderError('Could not connect to Server.');
        return;
    }
    if (!response.ok) {
        RenderError(response.status);
        return;
    }
    document.getElementById('title_text').innerText = 'CV: Hobbies';
    const hobbies = await response.json();
    const hobbiesList = document.createElement('ul');
    hobbies.forEach(hobby => {
        const hobbyElement = document.createElement('li');
        hobbyElement.innerText = hobby;
        hobbiesList.appendChild(hobbyElement);
    });
    document.getElementById('content').replaceChildren(hobbiesList);
}

async function RenderContact () {
    ChangeFavicon('assets/images/favicon.ico');
    let response = {};
    try {
        response = await fetch('http://127.0.0.1:8080/cv/contact');
    } catch (error) {
        RenderError('Could not connect to Server.');
        return;
    }
    if (!response.ok) {
        RenderError(response.status);
        return;
    }
    document.getElementById('title_text').innerText = 'CV: Contact';
    const info = await response.json();
    const infoList = document.createElement('ul');
    for (const mode in info) {
        let name = mode.replaceAll('_', ' ');
        name = name[0].toUpperCase() + name.substring(1);
        const infoElement = document.createElement('li');
        infoElement.innerText = `${name}: ${info[mode]}`;
        infoList.appendChild(infoElement);
    }
    document.getElementById('content').replaceChildren(infoList);
}

// https://stackoverflow.com/questions/260857/changing-website-favicon-dynamically
function ChangeFavicon (imagePath) {
    let link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = imagePath;
}
