const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".navbar");
 
/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<span class='material-icons md-36'>menu</span>";
    } else {
        menu.classList.add("active");
         
        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<span class='material-icons md-36'>close</span>";
    }
}
 
/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);
