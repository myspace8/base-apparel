const userEmail = document.getElementById('email-input')
const submitBtn = document.getElementById('submit-btn')
const submitMsg = document.getElementById('submit-msg')


userEmail.focus()
userEmail.addEventListener('keyup', function () {
    if(userEmail.value == '') {
        submitBtn.style.display = 'none'
    } else {
        submitBtn.style.display = 'block'
    }
})

function validateForm() {  
    // Check if the email address is in a valid format
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(userEmail.value)) {
      alert("Please enter a valid email address");
      return false;
    } else {
        submitMsg.style.display = 'block'
        submitBtn.style.display = 'none'
        userEmail.style.display = 'none'
        return true;
    }
}

submitBtn.addEventListener('click', validateForm)