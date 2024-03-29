const logo_container = document.getElementsByClassName("logo-container")[0];
const main_ip = `http://localhost:63342`;
logo_container.addEventListener("click", () => {
    window.location.href = `${main_ip}/BankUISystem/index.html`
})
