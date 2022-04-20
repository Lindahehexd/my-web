let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle("open-menu");
    menu.classList.toggle("move");
};
window.onscroll = () =>{
    navbar.classList.remove("open-menu");
    menu.classList.remove("move")
}
// swiper

var swiper = new Swiper(".glance-content", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//   emailjs 

function validate() {
    let name = document.querySelector('.name');
    let email = document.querySelector('.email');
    let msg = document.querySelector('.msg');
    let sendBtn = document.querySelector('.send-btn');

    sendBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (name.value == "" || email.value =="" || msg.value == "") {
            emptyerror();
        } else{
            sendmail(name.value, email.value, msg.value);
            success();
        }
    });
}

function sendmail(name,email,msg){
    emailjs.send("service_sgpirg8","template_8hzw5kf",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}

validate();

function emptyerror() {
    swal({
        title: "Oh No...",
        text: "Fields cannot be empty!",
        icon: "error",
      });   
}

function success() {
    swal({
        title: "Email sent successfully",
        text: "I'll try to reply in 24 hours",
        icon: "success",
      });   
}

// header background when scroll 

let header = document.querySelector('header')

window.addEventListener('scroll' ,() =>{
    header.classList.toggle('header-active', window.scrollY > 0);
});


// scrolltop

let scrollTop = document.querySelector('.scroll-top')

window.addEventListener('scroll' ,() =>{
    scrollTop.classList.toggle('scroll-active', window.scrollY > 200);
});
