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
             <button class="delete" id="delete" onclick="deleteUser('${user._id}')">Delete</button> 
             <a href="../pages/edit.html?id=${user._id}"><button class="edit" id="delete">Edit</button></a>

            </div>
        </div>`
    })
    document.getElementById("cards").innerHTML=str;  
}
getUser();

async function deleteUser(_id) {
    const res = await fetch (`http://localhost:3000/api/delete/${_id}`,
    {method : "DELETE"})
    console.log(res);  
}