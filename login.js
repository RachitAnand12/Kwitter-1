function login() {
    username = document.getElementById("user_input").value
    localStorage.setItem("user" , username)
    window.location = "addRoom.html"
}