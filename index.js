const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans,France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris,France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let containerEl=document.getElementById("container")
let str = ""; 
for(let i =  0 ; i<=2 ; i++){
str+=`<div class ="post">
<div class ="post-top">
<div>
<img class = "avatar" src  = ${posts[i].avatar}>
</div>
<div>
<p><span class ="username">${posts[i].username}</span> <br>${posts[i].location}</br></p>
</div>
</div>
<img class = "post" src =${posts[i].post}>
<div class = "bottom">
<img class="trio" src="images/icon-heart.png">
<img class="trio ss " src="images/icon-comment.png">
<img class="trio" src="images/icon-dm.png">
</div>
<div class = "footer">
<p class="like">${posts[i].likes} likes</p>
<p class="comment"><span class="user">${posts[i].username}</span> ${posts[i].comment}</p>
</div>
</div>`
}
containerEl.innerHTML=str