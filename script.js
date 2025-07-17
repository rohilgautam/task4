const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const messageEl = document.getElementById("message");
const authContainer = document.getElementById("auth-container");
const securedPage = document.getElementById("secured-page");
const logoutBtn = document.getElementById("logout-btn");

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("reg-username").value;
  const password = document.getElementById("reg-password").value;

  if (localStorage.getItem(username)) {
    messageEl.textContent = "Username already exists!";
  } else {
    localStorage.setItem(username, password);
    messageEl.textContent = "Registration successful! Please log in.";
    registerForm.reset();
  }
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("login-username").value;
  const password = document.getElementById("login-password").value;

  const storedPassword = localStorage.getItem(username);
  if (storedPassword && storedPassword === password) {
    messageEl.textContent = "";
    authContainer.style.display = "none";
    securedPage.style.display = "block";
  } else {
    messageEl.textContent = "Invalid username or password!";
  }
});

logoutBtn.addEventListener("click", () => {
  authContainer.style.display = "block";
  securedPage.style.display = "none";
  messageEl.textContent = "You have logged out.";
});
