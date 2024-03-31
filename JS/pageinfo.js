const server_not_active = `<marquee behavior="alternate" direction="left"; scrollamount="15" style="color: black; font-family: 'Arial Rounded MT Bold'; font-size: 100px;">SERVER <br> NOT ACTIVE</marquee>`

const logo_container = document.getElementsByClassName("logo-container")[0];
const main_data = document.getElementsByClassName("main-bottom")[0];
const server_ip = `http://127.0.0.1:5000`;
let server_active = false;
let pagedata = null;
const input_container = document.getElementsByClassName("input-field");

let confirm_submit;