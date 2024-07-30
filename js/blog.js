const blogPosts = document.getElementById('blogsContainer'); 

function postBlogs(){
    const blogHistory = JSON.parse(localStorage.getItem("blogs")) || [];

    blogHistory.forEach((blog) => {
        const divEl = document.createElement('div')
        divEl.classList.add('card')
        const titleEl = document.createElement('h4')
        titleEl.textContent = blog.title; 

        const contentEl= document.createElement('p')
        contentEl.textContent = blog.content; 

        const userEl = document.createElement('p')
        userEl.textContent = `User: ${blog.username}`; 

        divEl.appendChild(titleEl)
        divEl.appendChild(contentEl)
        divEl.appendChild(userEl)

        blogPosts.appendChild(divEl)

    });
}

postBlogs(); 

const goBack = function(event){
    event.preventDefault()

    window.location.href='./index.html'
}

const backButton = document.getElementById('back')
backButton.addEventListener('click', goBack);