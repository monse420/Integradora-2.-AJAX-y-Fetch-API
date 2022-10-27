const url = 'https://jsonplaceholder.typicode.com/posts/';

fetch(url)
    .then(response => response.json())
    .then(data => aData(data))
    .catch(error => console.log(error))

function aData(data) {
    let body = "";
    for (var i = 0; i < data.length; i++) {      
       body+=`<tr><td>${data[i].userId}</td><td>${data[i].id}</td><td>${data[i].title}</td><td>${data[i].body}</td></tr>`
    }
    document.getElementById('data').innerHTML = body
}