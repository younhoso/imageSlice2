
var container = $('.slide_wrap'),
    slideShow = container.find('.slide_show'),
    slideImg = slideShow.find('.slide_img'),
    slideImgDiv = slideImg.find('>div'),
    slideBtnPrev = container.find('.slide_btn .prev'),
    slideBtnNext = container.find('.slide_btn .next'),
    width = 600;

var slideImgSize = slideImgDiv.length;
var currentIndex = 0;

//이미지 움직이기
var left = function() {
    /**                                     // 이와 같은 조건을 아래와 같은 삼항연산자로 리팩토링할수 있다.
    if($(this).hasClass('prev') && 0 < currentIndex){
        slideImg.animate({ left: '+=600px'},300);
        currentIndex--;
    }
     */

    $(this).hasClass('prev') && 0 < currentIndex && (slideImg.animate({ left: '+=600px'},300), currentIndex--);    
};
var rigth = function() {
    /**                                      // 이와 같은 조건을 아래와 같은 삼항연산자로 리팩토링할수 있다.
    if( slideImgSize - 1 > currentIndex) {  
        slideImg.animate({ left: '-=600px'},300);
        currentIndex++;
    }
     */
    slideImgSize - 1 > currentIndex && (slideImg.animate({ left: '-=600px'},300), currentIndex++)
};


$(function(){
    slideImg.css({'width':width * slideImgSize});

    slideBtnPrev.on('click', left);
    slideBtnNext.on('click', rigth);
});