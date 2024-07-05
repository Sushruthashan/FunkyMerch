function Validation() {
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var emailpattern = "/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]$/";
    var passwordpattern = "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).";
    var usernamepattern = "^[A-Za-z][A-Za-z0-9_]$";

    if(username === '' || email === '' || password === '')
    {
        console.log("All fields must be filled");
        return false;
    }
    
    if(!usernamepattern.test(username))
    {
        return false;
    }

    if(!emailpattern.test(email))
    {
        return false;
    }

    if(!passwordpattern.test(password))
    {
        return false;
    }

    return true;

    console.log("Logged in successfully");
}
