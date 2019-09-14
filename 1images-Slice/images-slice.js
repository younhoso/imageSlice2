$(function(){
    var slideImg = $('.slide_img'),
        slides = slideImg.find(">div"),  //각각의 슬라이드 이미지
        currentIndex = 0,                //현재 이미지
        slideCount = slides.length;      //이미지 갯수
        var timerIdHistory;

    //첫번째(현재) 이미지가 사라지게, 두번째(다음) 이미지가 나타남
    //두번째(현재) 이미지가 사라지게, 두번째(다음) 이미지가 나타남
    function showNext() {
        var nextIndex = (currentIndex + 1) % slideCount;        //전체 이미지 
        clearInterval(timerIdHistory); 

        slides.eq(currentIndex).hide();                         //현재 이미지를 사라지게
        slides.eq(nextIndex).fadeIn(800);                       //다음 이미지를 나타나게
        currentIndex = nextIndex
        timerIdHistory = setInterval(showNext, 2000);
    }
    showNext()

});