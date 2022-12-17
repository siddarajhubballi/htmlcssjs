function validate() {
    let a = document.getElementById("username").value;
    let b = document.getElementById("password").value;
    if(a=="sidd" && b=="123") {
        alert("login successful.");
        window.location.href = "loggedin.html";
    }
    else {
        alert("Invalid username or password");
    
    }
}