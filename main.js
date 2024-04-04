const posts = document.getElementById('posts');
const albums = document.getElementById('albums');
const photos = document.getElementById('photos');
const titlesList = document.getElementById('titlesList');

fetchData("https://jsonplaceholder.typicode.com/posts");

function fetchData(url){
    fetch(url)
        .then(response => response.json())
        .then(title => {
            titlesList.innerHTML = "";
            title.forEach(list => {
                const li = document.createElement("li");
                li.textContent = list.title || list.name;
                titlesList.appendChild(li);
            });
        })
        .catch(error => console.log(error));
}

posts.addEventListener("click", function() {
    posts.classList.add("active");
    albums.classList.remove("active");
    photos.classList.remove("active");
    fetchData("https://jsonplaceholder.typicode.com/posts");
});

albums.addEventListener("click", function() {
    posts.classList.remove("active");
    albums.classList.add("active");
    photos.classList.remove("active");
    fetchData("https://jsonplaceholder.typicode.com/albums");
});

photos.addEventListener("click", function() {
    posts.classList.remove("active");
    albums.classList.remove("active");
    photos.classList.add("active");
    fetchData("https://jsonplaceholder.typicode.com/photos");
});