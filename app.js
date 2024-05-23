// app.js

function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var nic = document.getElementById('nic').value.trim();
    var password = document.getElementById('password').value.trim();

    var nameRegex = /^[a-zA-Z\s]+$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var nicRegex = /^42\d{11}$/; // NIC starts with "42" followed by 11 digits
    var passwordRegex = /^.{5,8}$/;

    var valid = true;

    // Name validation
    if (!nameRegex.test(name)) {
        document.getElementById('nameError').innerHTML = "Name can only contain letters and spaces";
        valid = false;
    } else {
        document.getElementById('nameError').innerHTML = "";
    }

    // Email validation
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerHTML = "Invalid email format";
        valid = false;
    } else {
        document.getElementById('emailError').innerHTML = "";
    }

    // NIC validation
    if (!nicRegex.test(nic)) {
        document.getElementById('nicError').innerHTML = "NIC number must start with '42' and be followed by 11 digits";
        valid = false;
    } else {
        document.getElementById('nicError').innerHTML = "";
    }

    // Password validation
    if (!passwordRegex.test(password)) {
        document.getElementById('passwordError').innerHTML = "Password must be between 5 to 8 characters";
        valid = false;
    } else {
        document.getElementById('passwordError').innerHTML = "";
    }

    return valid;
}
