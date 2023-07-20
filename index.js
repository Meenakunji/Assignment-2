 
window.addEventListener("scroll", function() {
    var conatiner1 = document.getElementById("nav");
  
    if (window.scrollY > 0) {
        conatiner1.style.backgroundColor = "white";
    } else {
        conatiner1.style.backgroundColor = "";
    }
  });

  navbox = document.querySelector(".navbox");

  

  burger = document.querySelector(".menuicon");

  burger.addEventListener("click", function(){
      
      navbox.classList.toggle("vis");
      navbox.classList.toggle("hnav");

       
  });





  