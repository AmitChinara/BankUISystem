logo_container.addEventListener("click", () => {
    if (server_active)
        loadData(pagedata['main_page_info']);
})

const adjustRatio = () => {
    let form_container = document.getElementsByClassName('form-container')[0];
    let detail_form = document.getElementsByClassName('upper-sub-division');
    let width = form_container.offsetWidth;
    let create_account_input_container = document.getElementsByClassName("create-account-input-container");

    if (width < 400) {
        form_container.style.aspectRatio = `1`;
        detail_form[0].style.width = `70%`;
        if (detail_form[1])
            detail_form[1].parentNode.removeChild(detail_form[1]);
        create_account_input_container[0].innerHTML = pagedata['create_account_left_input'] + pagedata['create_account_right_input'];
    }
    else {
        form_container.style.aspectRatio = `1.75`;
        detail_form[0].style.width = `45%`;
        loadData(pagedata['create_account_form']);

        create_account_input_container[0].innerHTML = pagedata['create_account_left_input'] ;
        create_account_input_container[1].innerHTML = pagedata['create_account_right_input'];
    }
}


window.addEventListener("resize", adjustRatio);
adjustRatio();

