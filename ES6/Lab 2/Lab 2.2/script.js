const btnsContainer = document.getElementById('btnsContainer')
const userPostsUl = document.createElement('ul')
userPostsUl.classList.add('postsContainer')
document.body.appendChild(userPostsUl)
userPostsUl.style.display = 'none';

fetch("https://jsonplaceholder.typicode.com/users").then((res)=>{
    return res.json()
}).then((data)=>{
    let prevUser;
    data.map((user)=>{
        const userBtn = document.createElement("button")
        userBtn.classList.add('btn')
        userBtn.innerText = user.name   
        btnsContainer.appendChild(userBtn)
        userBtn.addEventListener('click',async (e)=>{
            userPostsUl.style.display = 'block';
            if(prevUser){
                prevUser.classList.remove('active')
            }
            e.target.classList.add('active')
            prevUser = e.target;
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
                const userPosts = await response.json()
                userPostsUl.innerHTML = userPosts.map(post=>{
                    return `<li>${post.title}</li>`
                }).join('')
            } catch (error) {
                console.log(error)
            }   

        })
    })
}).catch((error)=>{
    console.log(error)
})

