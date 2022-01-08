# App-dev-Prefinal-Exam
A javascript code for log-in page

function Button() {
    var user = document.getElementById('us');
    var pass = document.getElementById('ps');
    var coruser = "user";
    var corpass = "pass";
    
    if(user.value == coruser){
    if(pass.value == corpass){
        window.alert("You are logged in as " + user.value);
        window.location.href = "index.html";
    }
    }
    else{
        window.alert("Invalid Username or Password");
    }
    if(user.value == "" || pass.value == ""){
        window.alert("Empty Field/s");
    }
    
    
}
