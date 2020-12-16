//navigation menu

const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const nav = document.getElementById("nav");
const boxshadow = document.getElementById("boxshadow");


hamburger.onclick = function() {
  hamburger.style.display = "none";
  close.style.display = "block";
  nav.style.display = "block";
  boxshadow.style.display = "block";
};

close.addEventListener('click',function(){
    hamburger.style.display = "block";
    close.style.display = "none";
    nav.style.display = "none";
    boxshadow.style.display = "none";
})
/*
close.onclick = function() {
    hamburger.style.display = "block";
    close.style.display = "none";
    nav.style.display = "none";
    boxshadow.style.display = "none";
  };
  */
//testimonial slideshow
let dot = document.getElementsByClassName('dot');
let testemonials = document.getElementsByClassName('testimonial-card');


for(let i = 0; i < dot.length; i++){

    dot[i].addEventListener('click', function(){
        var slideIndex = this.getAttribute('data-number');
        for(let i = 0; i < dot.length; i++){
            dot[i].classList.remove('active');
            testemonials[i].style.display = 'none';
        } 
        
        testemonials[slideIndex].style.display = 'block';
        this.classList.add('active');
    });
 }


 










//email validation
const _form = document.getElementById("form");
const _email = document.getElementById("email");

_form.addEventListener("submit", event => {
    event.preventDefault();

    validateEmail();
});

validateEmail = () => {
    const email_value = _email.value.trim();
    const _small = document.getElementById("small")
    if (email_value === '') {
        _small.textContent = "Email cannot be empty";
        _form.className = 'form error';
    } else if (!isEmail(email_value)) {
        _small.textContent = "Please enter a valid email address";
        _form.className = 'form error';
    } else if (isEmail(email_value)) {
        _small.textContent = "Thank you for your response";
        _form.className = 'form success';
    } 

}

isEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
}