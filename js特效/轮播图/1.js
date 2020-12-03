// 设置一个参数记录当前是第几张图片
var slideIndex = 1;
showSlides(slideIndex);


// 设置按钮的点击事件
function plusSlides(n) {
    showSlides(slideIndex += n);
}


// 设置最下边小原点的点击事件
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// 设置当前在第几张的计算方式
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    // 一旦设置这个属性，所在的图片就会显示
    slides[slideIndex - 1].style.display = "block";
    // 一旦设置这个属性，所在的小圆点就会变化
    dots[slideIndex - 1].className += " active";
}