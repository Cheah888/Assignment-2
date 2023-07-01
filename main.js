
$(document).ready(function() {

  let search = document.querySelector('.search-box');
  document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    menu.classList.remove('active');
  }

  /*Function when the screen's width is smaller than 800px*/
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
      menu.classList.toggle('bi-x');
      navbar.classList.toggle('active');
  }

  document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove('active');
  }

  document.querySelector('#search-icon').onclick = () => {
    navbar.classList.remove('active');
    search.classList.toggle('active');
}

  window.onscroll = () => {
      menu.classList.remove('bi-x');
      navbar.classList.remove('active');
  }

  //Hide Menu And Search Bar On Scroll
  window.onscroll = () => {
    menu.classList.remove('bi-x');
    navbar.classList.remove('active');
    search.classList.remove('active');
  }

  /*When user click on the FAQ, the answer for a single question will drop down*/
  const faqHeaders = document.querySelectorAll(".faqs-container .faq-header");

  faqHeaders.forEach((header, i) => {
    header.addEventListener("click", () => {
      header.nextElementSibling.classList.toggle("active");

      const open = header.querySelector(".open");
      const close = header.querySelector(".close");

      if (header.nextElementSibling.classList.contains("active")) {
        open.classList.remove("active");
        close.classList.add("active");
      } else {
        open.classList.add("active");
        close.classList.remove("active");
      }
    });
  });
  
  var heartBtn = document.getElementById('heart');
  heartBtn.onclick = () =>{
        if(heartBtn.style.color == "transparent"){
            heartBtn.style.color = "#FF4C4C";
        }
        else{
            heartBtn.style.color = "transparent";
        }
  }
});
