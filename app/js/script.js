const loginButton = document.querySelector(".button_login");
const loginButton2 = document.querySelector(".button_login_mobile");


const closeButton = document.querySelectorAll(".fa-times");
const signupButton = document.querySelector(".sign-up-page");
const backToLogin = document.querySelector(".fa-arrow-left");

const background = document.querySelector("#page-mask");
const logIn = document.querySelector(".login");
const signup = document.querySelector(".sign-up");

//opens the login menu
loginButton.addEventListener("click", function(){ 
    background.classList.add("active");
    logIn.classList.add("active");
    signup.classList.remove("active");
});

loginButton2.addEventListener("click", function(){ 
    logIn.classList.add("active");
    signup.classList.remove("active");
});

//adds functionality for the login and sign up close button
closeButton.forEach(item => item.addEventListener("click", function(){
    background.classList.remove("active");
    logIn.classList.remove("active");
    signup.classList.remove("active");
}));

//opens the sign up menu
signupButton.addEventListener("click", function(){
    logIn.classList.remove("active");
    signup.classList.add("active");
});

//returns to the login menu, from the sign up menu
backToLogin.addEventListener("click", function(){
    background.classList.add("active");
    logIn.classList.add("active");
    signup.classList.remove("active");
});


////////////////////////////////////////

function check(){
    //checks if the emails provided when signing up are equal
    var email1 = document.getElementById("email-sign-up");
    var email2 = document.getElementById("email-sign-up-repeat");

    if (email1.value != email2.value){
        document.getElementById("warning-message").innerHTML="The two emails must match!";
    }
    else{
        document.getElementById("warning-message").innerHTML=""
    }

    return false;
}

////////////////////////////////////////////////////////////

const hamburger = document.querySelector(".header_menu");
const background2 = document.querySelector("#page-mask-menu");
const menutoggle = document.querySelector(".header_links_toggle");
const body = document.querySelector(".body");

//Adds interactivity to the hamgurber button menu

hamburger.addEventListener("click", function(){
    if(hamburger.classList.contains("open")){
        hamburger.classList.remove("open");
        background2.classList.remove("open");
        menutoggle.classList.remove("open");
        body.classList.remove("no-scroll");
    }
    else{
        background2.classList.add("open");
        hamburger.classList.add("open");
        menutoggle.classList.add("open");
        body.classList.add("no-scroll");
    }
})

const toggleLink1 = document.querySelector(".toggle_link_1");
const toggleLink2 = document.querySelector(".toggle_link_2");
const toggleLink3 = document.querySelector(".toggle_link_3");

//closes the hamburger button menu when interacting with their links

toggleLink1.addEventListener("click", function(){
        hamburger.classList.remove("open");
        background2.classList.remove("open");
        menutoggle.classList.remove("open");
        body.classList.remove("no-scroll");
})
toggleLink2.addEventListener("click", function(){
    hamburger.classList.remove("open");
    background2.classList.remove("open");
    menutoggle.classList.remove("open");
    body.classList.remove("no-scroll");
})
toggleLink3.addEventListener("click", function(){
    hamburger.classList.remove("open");
    background2.classList.remove("open");
    menutoggle.classList.remove("open");
    body.classList.remove("no-scroll");
})