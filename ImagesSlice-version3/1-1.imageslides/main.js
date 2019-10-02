
var slideImg = $('.slide_img');
    var slides = slideImg.find('>div');   //슬라이드 이미지
    var currentIndex = 0;                       //현재 이미지
    var slideCount = slides.length;             //이미지 갯수

    var showNext = function() {
        var nextIndex = (currentIndex + 1) % slideCount;       //다음 이미지
       
        slides.eq(currentIndex).hide();                      //현재 이미지 사라지게
        slides.eq(nextIndex).fadeIn(400);                    //다음 이미지 나타나게
        currentIndex = nextIndex;  
    }


$(function(){ 
    setInterval(showNext, 3000); 
});