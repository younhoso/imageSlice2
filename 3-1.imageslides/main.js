
var container = $('.slide_wrap'),
    slideShow = container.find('.slide_show'),
    slideImg = slideShow.find('.slide_img'),
    slideImgDiv = slideImg.find('>div'),
    slideBtnPrev = container.find('.slide_btn .prev'),
    slideBtnNext = container.find('.slide_btn .next');

var slideImgSize = slideImgDiv.length;
var slideWidth = slideImgDiv.innerWidth();
var show_num = 3;
var num = 0;

var slideCopy = $('.slide:lt('+show_num+')').clone();
slideImg.append(slideCopy);     // 이미지 끊김없이 복사해서 뒤에다가 붙여넣기해서 무한으로 반복되게 하는것이다.

//이미지 움직이기
var left = function() {
    if(num == 0){
        num = slideImgSize;
        slideImg.css({'margin-left': -num * slideWidth+'px'})
    }
    num--;
    slideImg.animate({'margin-left': -slideWidth * num+'px'},500);
};
var rigth = function() {
    if(num == slideImgSize){
        num = 0;
        slideImg.css({'margin-left': num})
    }
    num++;
    slideImg.animate({'margin-left': -slideWidth * num+'px'},500);
};


$(function(){
    slideBtnPrev.on('click',  left);
    slideBtnNext.on('click', rigth);
});