const logo_container = document.getElementsByClassName("logo-container")[0];
const main_data = document.getElementsByClassName("main-bottom")[0];
const client_ip = `http://localhost:63342`;
const server_ip = `http://127.0.0.1:5000`;
let server_active = false;
let pagedata = ''
fetch(server_ip, {mode: "cors"})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        pagedata = data;
        server_active = true;
        loadData(pagedata['main_page_info'])
    })
    .catch(error => {
        loadData(server_not_active);
        console.log(error);
    })

logo_container.addEventListener("click", () => {
    if (server_active)
        loadData(pagedata['main_page_info']);
})
const loadData = (data) => main_data.innerHTML = data;

const createAccount = () => {
    let data = pagedata['create_account_form'];
    loadData(data);
}

const adjustAspectRatio = () => {
    let form_container = document.getElementsByClassName('form-container')[0];
    let detail_form = document.getElementsByClassName('upper-sub-division');
    let width = form_container.offsetWidth;

    if (width < 400) {
        form_container.style.aspectRatio = `1`;
        detail_form[0].style.width = `70%`;
        if (detail_form[1])
            detail_form[1].parentNode.removeChild(detail_form[1]);
    }
    else {
        form_container.style.aspectRatio = `1.75`;
        detail_form[0].style.width = `45%`;
        loadData(pagedata['create_account_form']);
    }
}

if (server_active) {
    window.addEventListener("resize", adjustAspectRatio);
    adjustAspectRatio();
}


const createAccountLogin = () => {
    let data = pagedata['account_login_info'];
    loadData(data);
}

const createAccountDelete = () => {
    let data = pagedata['delete_account_form'];
    loadData(data);
}


