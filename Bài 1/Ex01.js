function togglePassword() {
    let passwordInput = document.getElementById("inputPassword");
    let iconEye = document.getElementById("eyeIcon");
    passwordInput.type === 'password' ? passwordInput.type = "text" : passwordInput.type = "password";
    passwordInput.type === 'password' ? iconEye.innerText = "👁‍🗨" : iconEye.innerText = "👁";
}