function signup(e) {
    e.preventDefault();

    let myForm = document.getElementById("myForm");

    let name = myForm.name.value;
    let email = myForm.email.value;
    let password = myForm.password.value;

    if (localStorage.getItem("users") === null) {
        localStorage.setItem("users", JSON.stringify([]));
    }

    let user = {
        name,
        email,
        password
    };

    let arr = JSON.parse(localStorage.getItem("users"));
    arr.push(user);

    localStorage.setItem("users", JSON.stringify(arr));
}

