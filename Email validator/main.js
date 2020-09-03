function validateEamil(inputText) {
    var regexPattren = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return  regexPattren.test(inputText);
}

function onbuttonClicked(){
    var name =  document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = "Welcome "+ name;
    if (validateEamil(email))
    {
        document.getElementById('login').innerHTML = message; 
    }

    else {
  
        document.getElementById('email').style.borderBottomColor = "red";
        document.getElementById('error').innerHTML = " ⚠ Invalid Email!";
    } 

}
