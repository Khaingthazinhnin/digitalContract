document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const usernameError = document.getElementById("username-error"); // span for username error
  const passwordError = document.getElementById("password-error"); // span for password error
  const toggleIcon = document.getElementById("toggleIcon");

  // Handle form submission
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    const username = usernameInput.value.trim();
    const password = passwordInput.value;
    const usernamePattern = /^[a-zA-Z]+$/;

    // Clear previous error messages
    usernameError.textContent = "";
    passwordError.textContent = "";

    let valid = true;

    if (username === "") {
      usernameError.textContent = "Enter your Name";
      usernameInput.style.border = "1px solid red";
      valid = false;
    } else if (!usernamePattern.test(username)) {
      usernameError.textContent =
        "Username must contain letters only. Numbers and special characters are not allowed.";
      usernameInput.style.border = "1px solid red";
      valid = false;
    } else {
      usernameInput.style.border = "";
    }

    if (password.length < 8) {
      passwordError.textContent =
        "Password must be at least 8 characters long.";
      passwordInput.style.border = "1px solid red";
      valid = false;
    } else {
      passwordInput.style.border = "";
    }

    if (valid) {
      console.log("Username:", username);
      console.log("Password:", password);
      alert(
        "Login attempt with Username: " +
          username +
          " and Password: " +
          password
      );
    }
  });

  // Optional: "Sign up" link
  const signUpLink = document.querySelector(".sign-up-link");
  if (signUpLink) {
    signUpLink.addEventListener("click", function (event) {
      event.preventDefault();
      alert("Redirecting to account creation page!");
    });
  }
});

// Toggle password visibility
function togglePasswordVisibility() {
  const passwordInput = document.getElementById("password");
  const toggleIcon = document.getElementById("toggleIcon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  }
}
