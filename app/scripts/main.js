var button = document.querySelector(".button-menu")
var button_icon = document.querySelectorAll(".button-menu span");
var menu = document.querySelector(".collapse-navbar");
var navbar = document.querySelector(".navbar");
button.addEventListener("click", function animation() {
    console.log(this.className)
        if ((this.className == "button-menu")) {
            // bunuda yoxlamiwam
            console.log("var")
            button.classList.add("active");
            console.log("add olundu");
            menu.style.display="block";
            navbar.style.transition="0.6s ease";
            navbar.style.height="280px";
            menu.style.transitions = "0.4s ease";
            button_icon[0].style.transform = "translateY(15px) rotateZ(40deg)";
            button_icon[0].style.opacity = "1";
            button_icon[0].style.transitions = "0.4s ease";

        
            button_icon[1].style.opacity = "0";
            button_icon[1].style.transform = "translateX(50px)";
            button_icon[1].style.transitions = "0.4s ease";

            button_icon[2].style.transform = "translateY(-10px) rotateZ(-40deg)";
            button_icon[2].style.opacity = "1";
            button_icon[2].style.transitions = "0.4s ease";
        
        
        
        
        // $(this).find(".dropdown-menus ").slideToggle("slow");
        }
        else {
            console.log("yoxdu")
            button.className="button-menu";
            menu.style.display="none";
            navbar.style.transition="0.6s ease";
            navbar.style.height="0px";
            menu.style.transitions = "0.4s ease";
            button_icon[0].style.transform = "translateY(0px) rotateZ(0deg)";
            button_icon[0].style.opacity = "1";
            button_icon[0].style.transitions = "0.4s ease";

        
            button_icon[1].style.opacity = "1";
            button_icon[1].style.transform = "translate(0px)";
            button_icon[1].style.transitions = "0.4s ease";

            button_icon[2].style.transform = "translateY(0px) rotateZ(0deg)";
            button_icon[2].style.opacity = "1";
            button_icon[2].style.transitions = "0.4s ease";
        }

});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        autoplay:false,
        items:6,
        center:true,
        loop:true,
        margin:0,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:2
            },
            600:{
                items:4
            },
            1000:{
                items:6
            }
        }
    })
});
