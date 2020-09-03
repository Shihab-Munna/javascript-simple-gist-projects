var alertRedInput = "#8C1010";
var defaultInput = "rgba(10, 180, 180, 1)";

function userNameValidation(usernameInput) {
    var issueArr = [];
    if (/[-!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/]/.test(usernameInput)) {
        issueArr.push("No special characters!");
    }
    
    return issueArr;
}


function passwordValidation(passwordInput) {
    var issueArr = [];
    if (!/^.{6,8}$/.test(passwordInput)) {
        issueArr.push("Password must be between 6-8 characters.");
    }
    if (!/\d/.test(passwordInput)) {
        issueArr.push("Must contain at least one number.");
    }
    if (!/[a-z]/.test(passwordInput)) {
        issueArr.push("Must contain a lowercase letter.");
    }
    if (!/[A-Z]/.test(passwordInput)) {
        issueArr.push("Must contain an uppercase letter.");
    }

    return issueArr;

}


function NameValidation(name) {
    var username = document.getElementById("username");
    console.log(username);
    var Arr = [];
    Arr = userNameValidation(name);
    console.log(Arr);

    if (Arr.length > 0) {
        username.setCustomValidity(Arr);
        username.style.borderColor = alertRedInput;
    } else {
        username.setCustomValidity("");
        username.style.borderColor = defaultInput;
    }
}


function userpasswordValidation(passwordinput) {
    var password = document.getElementById("password");
    var Arr2;
    Arr2 = passwordValidation(passwordinput);

    if (Arr2.length > 0) {
        password.setCustomValidity(Arr2.join("\n"));
        password.style.borderColor = alertRedInput;
    } else {
        password.setCustomValidity("");
        password.style.borderColor = defaultInput;
    }

}
