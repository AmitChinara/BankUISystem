const createAccountSubmit = () => {
    confirm_submit = false;
    let first_name = input_container[0];
    let last_name = input_container[1];
    let emailid = input_container[2];
    let date_of_birth = input_container[3];
    let pin = input_container[4];
    let confirm_pin = input_container[5];

    if (first_name.length != 0 && last_name.length != 0 && emailid.length != 0 && emailid.contains("@") && date_of_birth.length != 0 && pin.length != 0 && confirm_pin.length != 0) {
        confirm_submit = true;
    }
}

const createAccountClear = () => {
    for (let i = 0; i < input_container.length; i++)
        input_container[i].value = '';
}

const checkPin = (flag) => {
    let pin = input_container[4].value;
    let confirm_pin = input_container[5].value;

    let temp_length_1 = pin.length;
    let last_char_1 = pin.charAt(temp_length_1-1);
    let temp_length_2 = confirm_pin.length;
    let last_char_2 = confirm_pin.charAt(temp_length_1-1);

    if (temp_length_1 != 0 && flag == 1 && last_char_1 < '0' || last_char_1 > '9') {
        input_container[4].value = pin.substring(0, temp_length_1-1);
        alert("Only numeric value is accepted");
    } else if (temp_length_2 != 0  && flag == 2 && last_char_2 < '0' || last_char_2 > '9') {
        input_container[5].value = confirm_pin.substring(0, temp_length_2-1);
        alert("Only numeric value is accepted");
    } else if (temp_length_1 > 4) {
        input_container[4].value = pin.substring(0, 4);
        alert(`Can't enter PIN more than 4`);
    } else if (temp_length_2 > 4) {
        input_container[5].value = confirm_pin.substring(0, 4);
        alert(`Can't enter PIN more than 4`);
    }

}
