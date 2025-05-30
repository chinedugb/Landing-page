function scrollToSection(id){
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
}

document.getElementById("signupForm").addEventListener("submit", function (e){
    e.preventDefault();
    const emailInput = document.getElementById("email");
    const message = document.getElementById("formMessage");

    if(emailInput.value.include("@")){
        message.textContent = "Thank you! You're signed up.",
        message.style.color = "green"
        emailInput.value = "";
    }else{
         message.textContent = "Please enter a valid email address.",
         message.style.color = "red"
    }
});