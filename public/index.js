// window.addEventListener('click', function(event){
//     fetch('http://127.0.0.1:8080/list')
//      .then(response => response.text())
//      .then(body =>
//         document.getElementById('content').innerHTML=body)
//   });


const navbar_brand = document.getElementById("navbar-brand");
const skills_button = document.getElementById("skills_button");
const education_button = document.getElementById("education_button");
const work_experience_button = document.getElementById("work_experience_button");
const hobbies_button = document.getElementById("hobbies_button");

const projects_button = document.getElementById("projects_button");

navbar_brand.addEventListener("click", function(){
    fetch('http://127.0.0.1:8080/intro')
    .then(response => response.text())
    .then(body => {
       document.getElementById('title_text').innerText = "Nathaniel's Portfolio";
       document.getElementById('content').innerHTML=body})
})

projects_button.addEventListener("click", function(){
    fetch('http://127.0.0.1:8080/projects')
    .then(response => response.text())
    .then(body => {
       document.getElementById('title_text').innerText = "Projects:";
       const projects = JSON.parse(body)
       document.getElementById('content').replaceChildren();
    })
})

skills_button.addEventListener("click", function(){
    fetch('http://127.0.0.1:8080/skills')
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
})

education_button.addEventListener("click", function(){
    fetch('http://127.0.0.1:8080/education')
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
})

work_experience_button.addEventListener("click", function(){
    fetch('http://127.0.0.1:8080/work_experience')
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
})

hobbies_button.addEventListener("click", function(){
    fetch('http://127.0.0.1:8080/hobbies')
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
})