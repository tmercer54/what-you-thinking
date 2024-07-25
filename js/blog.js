let blogArray = localStorage.getItem('blogs') ? JSON.parse(localStorage
    .getItem('blogs')) : [];
var ul;
function add() {
var username = document.getElementById("username").value;
var title = document.getElementById("title").value;
var content = document.getElementById("content").value;
if(username.trim().length < 1 || title.trim().length < 1 || content.trim().length < 1) {
    alert("Please enter data for all fields!");
    return;
}
blogArray.push({
    userName : username,
    blogTitle : title,
    blogContent : content
});
username.value = "";
title.value = "";
content.value = "";
var title = document.getElementById("title").value;
var content = document.getElementById("content").value;
localStorage.setItem('blogs', JSON.stringify(blogArray));
window.location.href='mbook.html'
}
function addTask(blogArray) {
alert(blogArray.userName + "-" + blogArray.blogTitle);
}
function submit() {
ul = document.querySelector('ul');		
blogArray.forEach(addTask);
function addTask(blogArray) {
    const li = document.createElement('li')
      li.textContent = blogArray.userName + " - " + blogArray.blogTitle;
      ul.appendChild(li);
}
//window.location.href='mbook.html';
}
function back() {
window.location.href='rbook.html'
}

function reset() {
localStorage.clear();
ul.innerHTML = '';
blogArray = [];
}