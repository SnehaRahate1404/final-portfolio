document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.getElementById("overlay");
    const toggleBtn = document.getElementById("certificates"); // Button to show certificates
    const closeBtn = document.getElementById("close-certificates");  // Button to close certificates
    const aboutOverlay = document.getElementById("aboutOverlay");
    const aboutClose = document.getElementById("close-about");
    const aboutToggle = document.getElementById("about-btn");

    // Ensure overlay is hidden initially
    overlay.style.display = "none";

    //Ensure about overlay is hidden initially
    aboutOverlay.style.display = "none";

    //show about section on clicking learn more button
    aboutToggle.addEventListener("click",function(){
        aboutOverlay.style.display = "flex";
        aboutClose.style.display = "flex";
        setTimeout(()=>{
            aboutOverlay.style.opacity = "1";
        },10)
    });

    //close the about seection
    aboutClose.addEventListener("click" , function(){
        aboutOverlay.style.opacity = "0";
        aboutOverlay.style.transform = "scale(0.9)";
        setTimeout(()=>{
            aboutOverlay.style.display="none"
        },300)
    });
    
    // Show certificates when clicking the button
    toggleBtn.addEventListener("click", function () {
        overlay.style.display = "flex"; // Show overlay
        closeBtn.style.display="flex";
        setTimeout(() =>{
            overlay.style.opacity = "1";
            overlay.style.transform = "scale(1)";
        } , 10)
    });

    // Hide certificates when clicking the close button
    closeBtn.addEventListener("click", function () {
        console.log("Close button clicked"); // Debugging
        overlay.style.opacity = "0";
        overlay.style.transform = "scale(0.9)";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 300);
    });

    let nav = document.querySelector("nav");
    let ul = document.getElementById("show-menu");
    let menu = document.getElementById("menu");
    let navbar = document.getElementById("navbar-menu");
    let close = document.getElementById("menu-close");
    let icon = document.querySelector("#menu-close i")

    menu.addEventListener("click" , ()=>{
        nav.classList.toggle("active");
        navbar.classList.toggle("active");
        menu.classList.toggle("active");
        close.classList.toggle("active")
        icon.classList.toggle("active");
    });
    
    close.addEventListener("click",()=>{
        nav.classList.remove("active");
        navbar.classList.remove("active");
        menu.classList.remove("active");
        close.classList.remove("active")
    })

    let btn = document.querySelector("#about-more button");
        btn.addEventListener("mousemove" , function(e){
            let x = e.pageX - btn.offsetLeft
            let y = e.pageY - btn.offsetTop;

            btn.style.setProperty('--x' , x+'px');
            btn.style.setProperty('--y',y+'px');
    });

});



