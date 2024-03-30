const logo_container = document.getElementsByClassName("logo-container")[0];
const main_data = document.getElementsByClassName("main-bottom")[0];
const main_ip = `http://localhost:63342`;
logo_container.addEventListener("click", () => loadData(main_page_info))

const loadData = (data) => main_data.innerHTML = data;

const createAccount = () => {
    let data = create_account_form;
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
        loadData(create_account_form);
    }
}
window.addEventListener("resize", adjustAspectRatio);
adjustAspectRatio();

const createAccountLogin = () => {
    let data = account_login_info;
    loadData(data);
}

const createAccountDelete = () => {
    let data = delete_account_form;
    loadData(data);
}


