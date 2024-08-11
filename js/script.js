

function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

// navbar
  const navbar = document.querySelector('.container');
  const navbarItems = document.querySelectorAll('.container a');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 35) {
      navbar.classList.add('sticky'); // Add 'sticky' class to navbar
      navbarItems.forEach(item => item.classList.add('scroll-active')); // Add 'scroll-active' class to navbar items
    } else {
      navbar.classList.remove('sticky');
      navbarItems.forEach(item => item.classList.remove('scroll-active'));
    }
  });
  
//auto type on slide
   const txt = ["Fitness Help you to Feel Better", "Your Fitness Partner Where Ever You Are", "Get The Result You Want","Every Step Counts"];
   let i=0, j=0;
   let end=false;
   function wait(seconds){
    return new Promise((resolve) => setTimeout(resolve, seconds*1000));}
    async function main(){
    if(i < txt.length){
    if(end==false && j <= txt[i].length){
         document.getElementById("typed").innerHTML += txt[i][j];  
         j++
       }
       if(end==true && j <= txt[i].length){
           document.getElementById("typed").innerHTML = txt[i].substring(0,j-1);
           j-- 
       }
        if(j == txt[i].length){
           end= true;
           await wait(2)}
         if(end==true && j ==0){
         i++
         end=false;  }} else
       i=0;
     setTimeout(main,100)}
   main();



//slide show
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);}
function currentSlide(n) {
  showSlides(slideIndex = n);}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";}
   
