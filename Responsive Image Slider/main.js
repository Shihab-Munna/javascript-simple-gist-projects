var currentIndex = 1;
showSlides (currentIndex);


function nextSlide(n){
    showSlides(currentIndex += n);
}

function previousSlide(n){
    showSlides(currentIndex += n);
}

function selectSlide(n) {
    showSlides(currentIndex= n);

}


function showSlides(n) {
    var i ;
    var slides =document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if (n > slides.length){currentIndex= 1}
    if (n < 1){currentIndex= slides.length}

    for (i=0 ; i< slides.length; i++){
        slides[i].style.display = "none";

    }

    for (i=0 ; i < dots.length ; i++)
    {
        dots[i].className = dots[i].className.replace(" active", "")
    }

    slides[currentIndex- 1].style.display = "block";
    dots[currentIndex- 1].className += " active";
}
