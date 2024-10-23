async function getUser() {
    const res = await fetch("http://localhost:3000/api/getuser");
    console.log(res);
    const users = await res.json();
    console.log(users);
    str =``;
    users.map((user)=>{
        str+=`<div class="card">
            <div class="image">
                <img src="http://localhost:3000/api/image/${user.image.filename}" alt="">
            </div>
            <div class="content">
                <h1>${user.username}</h1>
                <p>${user.email}</p>
            </div>
        </div>`
    })
    document.getElementById("cards").innerHTML=str;  
}
getUser();