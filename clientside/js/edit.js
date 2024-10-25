const url=window.location.href;
const urlParams=new URLSearchParams(url.split("?")[1]);
const id=urlParams.get("id");

async function getUser() {
    const res = await fetch(`http://localhost:3000/api/getuserd/${id}`)
    const user = await res.json();
    console.log(user);
    document.getElementById("form").innerHTML=`
      <label for="username">Username:</label>
            <input type="text" id="username" name="username" value=${user.username}>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" value=${user.email}>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" value=${user.phone}>

            <label for="image">Profile Image:</label>
            <input type="file" id="image" name="file" accept="image/*">

            <div class="proimg">
            <img src="http://localhost:3000/api/image/${user.image.filename}" alt="">
            </div>
            <button type="submit" class="submit-button">Submit</button>`
    
}
getUser();