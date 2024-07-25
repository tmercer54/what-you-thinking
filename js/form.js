const submitElement = document.getElementById('submit')
const usernameElement = document.getElementById('username')
const titleElement = document.getElementById('title')
const contentElement = document.getElementById('content')
const blogHistory = JSON.parse(localStorage.getItem("blogHistory")) || [];

//JSON.stringify
function collectFormData(event) {
    event.preventDefault()
    console.log(event)
const username = usernameElement.value,
const title = titleElement.value,
const content = contentElement.value,

blogHistory.push(blogObject)
localStorage.setItem('blogHistory', JSON.stringify(blogHistory))
location.replace('./blog.html')

}


submitElement.addEventListener('click', collectFormData)