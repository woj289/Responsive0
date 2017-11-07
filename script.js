var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var x1 = document.getElementsByClassName("mySlides1");
    var x2 = document.getElementsByClassName("mySlides3");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
       x1[i].style.display = "none";
       x2[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}
    x[myIndex-1].style.display = "block";
    x1[myIndex-1].style.display = "block";
    x2[myIndex-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
}


function scroll_to(selector) {
    $('html,body').animate({scrollTop: $(selector).offset().top}, 1000);
    return false;
} 
