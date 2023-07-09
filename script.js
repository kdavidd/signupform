const body = document.querySelector('body');
const form = document.querySelector('form');

let btn = document.querySelector('#btn-submit');
let pass_info = document.querySelector(".pass-info");
let pass_input = body.querySelector('#user-confirm-pw');

const checkPasswords = () =>{
    const password1 = body.querySelector('#user-pw').value;
    const password2 = body.querySelector('#user-confirm-pw').value;
    if(password1 !== password2) {
        pass_info.textContent="Passwords do not match!";
        pass_input.focus();
        pass_input.setCustomValidity(" ");
        return false;
    } else {
        pass_info.textContent="";
        pass_input.setCustomValidity("");
        form.reportValidity();
        
        return true;
    }
}

btn.addEventListener('click', checkPasswords);


