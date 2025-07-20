document.addEventListener("DOMContentLoaded", function () {
  // USER LOGIN FORM
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = usernameInput.value.trim();
      const password = passwordInput.value;
      const usernamePattern = /^[a-zA-Z]+$/;

      usernameError.textContent = "";
      passwordError.textContent = "";
      usernameInput.style.border = "";
      passwordInput.style.border = "";

      let valid = true;
      if (username === "") {
        usernameError.textContent = "Enter your Name";
        usernameInput.style.border = "1px solid red";
        valid = false;
      } else if (!usernamePattern.test(username)) {
        usernameError.textContent = "Username must contain letters only.";
        usernameInput.style.border = "1px solid red";
        valid = false;
      }
      if (password === "") {
        passwordError.textContent = "Enter your Password";
        passwordInput.style.border = "1px solid red";
        valid = false;
      } else if (password.length < 8) {
        passwordError.textContent =
          "Password must be at least 8 characters long.";
        passwordInput.style.border = "1px solid red";
        valid = false;
      }

      if (valid) {
        console.log("Username:", username);
        console.log("Password:", password);
        alert("Login successful!");
      }
    });
  }

  // USER SIGNUP FORM
  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    const usernameInput = document.getElementById("signup-username");
    const emailInput = document.getElementById("signup-email");
    const passwordInput = document.getElementById("signup-password");
    const confirmPasswordInput = document.getElementById("confirm-password");

    const usernameError = document.getElementById("signup-username-error");
    const emailError = document.getElementById("signup-email-error");
    const passwordError = document.getElementById("signup-password-error");
    const confirmError = document.getElementById("confirm-password-error");

    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = usernameInput.value.trim();
      const email = emailInput.value.trim();
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      const usernamePattern = /^[a-zA-Z]+$/;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      usernameError.textContent = "";
      emailError.textContent = "";
      passwordError.textContent = "";
      confirmError.textContent = "";
      usernameInput.style.border = "";
      emailInput.style.border = "";
      passwordInput.style.border = "";
      confirmPasswordInput.style.border = "";

      let valid = true;

      if (username === "") {
        usernameError.textContent = "Enter your Name";
        usernameInput.style.border = "1px solid red";
        valid = false;
      } else if (!usernamePattern.test(username)) {
        usernameError.textContent = "Username must contain letters only.";
        usernameInput.style.border = "1px solid red";
        valid = false;
      }
      if (email === "") {
        emailError.textContent = "Enter your Email";
        emailInput.style.border = "1px solid red";
        valid = false;
      } else if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a correct Email address";
        emailInput.style.border = "1px solid red";
        valid = false;
      }
      if (password === "") {
        passwordError.textContent = "Enter your Password";
        passwordInput.style.border = "1px solid red";
        valid = false;
      } else if (password.length < 8) {
        passwordError.textContent =
          "Password must be at least 8 characters long.";
        passwordInput.style.border = "1px solid red";
        valid = false;
      }
      if (confirmPassword === "") {
        confirmError.textContent = "Confirm your Password";
        confirmPasswordInput.style.border = "1px solid red";
        valid = false;
      } else if (confirmPassword !== password) {
        confirmError.textContent = "Passwords do not match";
        confirmPasswordInput.style.border = "1px solid red";
        valid = false;
      }

      if (valid) {
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);
        alert("Sign Up successful!");
      }
    });
  }

  // ADMIN LOGIN FORM
  const adminLoginForm = document.getElementById("adminLoginForm");
  if (adminLoginForm) {
    const adminUsernameInput = document.getElementById("admin-login-username");
    const adminPasswordInput = document.getElementById("admin-login-password");
    const adminUsernameError = document.getElementById(
      "admin-login-username-error"
    );
    const adminPasswordError = document.getElementById(
      "admin-login-password-error"
    );

    adminLoginForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const username = adminUsernameInput.value.trim();
      const password = adminPasswordInput.value;
      const usernamePattern = /^[a-zA-Z]+$/;

      adminUsernameError.textContent = "";
      adminPasswordError.textContent = "";
      adminUsernameInput.style.border = "";
      adminPasswordInput.style.border = "";

      let valid = true;
      if (username === "") {
        adminUsernameError.textContent = "Enter Admin Username";
        adminUsernameInput.style.border = "1px solid red";
        valid = false;
      } else if (!usernamePattern.test(username)) {
        adminUsernameError.textContent = "Username must contain letters only.";
        adminUsernameInput.style.border = "1px solid red";
        valid = false;
      }
      if (password === "") {
        adminPasswordError.textContent = "Enter Password";
        adminPasswordInput.style.border = "1px solid red";
        valid = false;
      } else if (password.length < 8) {
        adminPasswordError.textContent =
          "Password must be at least 8 characters long.";
        adminPasswordInput.style.border = "1px solid red";
        valid = false;
      } else if (
        !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(password)
      ) {
        adminPasswordError.textContent =
          "Password must include uppercase, lowercase, number, and special character.";
        adminPasswordInput.style.border = "1px solid red";
        valid = false;
      }

      if (valid) {
        console.log("Admin Username:", username);
        console.log("Admin Password:", password);
        alert("Admin Login successful!");
      }
    });
  }
});

// TOGGLE PASSWORD VISIBILITY (Reusable)
window.togglePasswordVisibility = function (inputId, iconId) {
  const passwordInput = document.getElementById(inputId);
  const toggleIcon = document.getElementById(iconId);

  if (!passwordInput || !toggleIcon) {
    console.error(
      "Error: Password input or toggle icon not found for IDs:",
      inputId,
      iconId
    );
    return;
  }

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  }
};
