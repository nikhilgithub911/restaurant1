let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header .navbar a')

window.onscroll = () =>{
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')

    section.forEach(sec =>{
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop -150;
      let id = sec.getAttribute('id');

// the below code changes the color of menu on hover from white to green 
      if(top => offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');

        });
      };


    });
}

// this will open the search page when user will press the search button
document.querySelector('#search-icon').onclick =() =>{
    document.querySelector('#search-form').classList.toggle('active');
}

// below code will remove the search page when user clicks on the cross on search page
document.querySelector('#close').onclick =() =>{
    document.querySelector('#search-form').classList.remove('active');
}


var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop:true,
  });


  function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }

  function fadeOut(){
    setInterval(loader,3000);
  }

  window.onload = fadeOut;