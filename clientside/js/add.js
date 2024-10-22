document.getElementById("form").addEventListener("submit",async(e)=>{
    e.preventDefault();
    const data = new FormData(e.target)
    console.log(data);
    fetch("http://localhost:3000/api/adduser",{
        method:"POST",
        body:data
    }).then((res)=>{
        console.log(res);
        if(res.status==201){
            alert("success");
            window.location.href="../index.html"
        }
        else{
            alert("error")
        }
        
    }).catch((error)=>{
        console.log(error);
        
    });
})
