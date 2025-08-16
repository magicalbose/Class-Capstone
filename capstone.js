var index = 0;

function carousel() {
    var slides = document.getElementsByClassName("myslides");
    for (var i = 0; i < 3; i++) {
        slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block";
    setTimeout(carousel, 2000);
}


carousel();
