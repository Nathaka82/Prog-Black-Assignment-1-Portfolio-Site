// window.addEventListener('click', function(event){
//     fetch('http://127.0.0.1:8080/list')
//      .then(response => response.text())
//      .then(body =>
//         document.getElementById('content').innerHTML=body)
//   });


const navbar_brand = document.getElementById("navbar-brand");

navbar_brand.addEventListener("click", function(){
    fetch('http://127.0.0.1:8080/intro')
    .then(response => response.text())
    .then(body =>
       document.getElementById('content').innerHTML=body)
})