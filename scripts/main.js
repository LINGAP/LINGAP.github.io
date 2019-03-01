var contactForm=document.querySelector("form");
var mail = document.getElementById('mail');
var msg = document.getElementById('msg');
// var submit = document.getElementById('submit');


contactForm.onsubmit = function(e) {
  if (mail.value === '' || msg.value === '') {
    e.preventDefault();
    alert("Mail and Message required!");
  }
}


var bg=document.querySelector("div");
// var WIDTH=window.innerWidth;
// var HEIGHT=window.innerHeight;
// bg.style.width=WIDTH+'px';
// bg.style.height=HEIGHT+'px';
// bg.style.backgroundColor='black';
