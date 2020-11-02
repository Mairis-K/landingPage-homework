//const  btnScrollToTop = document.querySelector('#btnScrollToTop');

//btnScrollToTop.addEventListener('click', function () {
   
  //  window.scrollTo ({
  //      top: 0,
  //      left: 0,
  //      behavior: "smooth"
  //  })
//})
    


const links = document.querySelectorAll("a");
console.log(links);

links.forEach(link=>link.addEventListener("click", clickHandler));

function clickHandler(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    scroll({
        top: offsetTop -100 ,
        behavior: "smooth"
    })
}


//Get the button
const mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = () => scrollFunction();

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
window.scrollTo({top:0, behavior: 'smooth'})
}