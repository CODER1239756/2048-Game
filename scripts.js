const loginForm = document.getElementById("loginForm");
const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = loginUsername.value;
    const password = loginPassword.value;

    const response = await fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
        loginMessage.textContent = "Login successful!";
        window.location.href = "/dashboard";
    } else {
        loginMessage.textContent = "Login failed. Please check your credentials.";
    }
});
    