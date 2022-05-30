let app;
if(localStorage.getItem("users")===null){
    app=new LocalApp();
}else {
    app=new LocalApp();
    let strArray=localStorage.getItem("users");
    let users =JSON.parse(strArray);
    app.users=users;
}


function register(){
    let fullnames=document.querySelector("#fullnames").value;
    let email=document.querySelector("#email").value;
    let phone=document.querySelector("#phone").value;
    let password=document.querySelector("#password").value;
    let password2=document.querySelector("#password2").value;

    app.addUser(fullnames,email,phone,password,password2);
    localStorage.setItem("users", JSON.stringify(app.users));
}
function login(){
    let uid =document.querySelector("#uid").value;
    let pwd=document.querySelector("#pwd").value;
    if(app.loginUser(uid,pwd)){
        location.href="project.html";
    }
}