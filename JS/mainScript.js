
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

const loadData = (data) => main_data.innerHTML = data;

const createAccount = () => {
    let data = pagedata['create_account_form'];
    loadData(data);
    adjustRatio();
}

const createAccountLogin = () => {
    let data = pagedata['account_login_info'];
    loadData(data);
}

const createAccountDelete = () => {
    let data = pagedata['delete_account_form'];
    loadData(data);
}


