const form = document.getElementById('blogForm')
const usernameElement = document.getElementById('username')
const titleElement = document.getElementById('title')
const contentElement = document.getElementById('content')
const blogHistory = JSON.parse(localStorage.getItem("blogs")) || [];


const collectFormData = function(event) {
    event.preventDefault()

const username = usernameElement.value;
const title = titleElement.value;
const content = contentElement.value;

const blogObject = {
    username: username,
    title: title,
    content: content
}

blogHistory.push(blogObject)
localStorage.setItem('blogs', JSON.stringify(blogHistory)); 
window.location.href = './blog.html' 

}


form.addEventListener('submit', collectFormData)