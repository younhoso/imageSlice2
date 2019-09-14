$(function(){
   var container = $('.slide_wrap');
   var slideShow = container.find('.slide_show');
   var slideImg = slideShow.find('.slide_img');
   var slides = slideImg.find('>div');              //슬라이드 이미지
   var slideBtn = container.find('.slide_btn');     //슬라이드 버튼

   var slideCount = slides.length;                  //슬라이드 개수
   var slideWidth = slides.innerWidth();            //슬라이드 이미지의 가로 값 innerWidth는 width값 + padding값도 같이 가져오기 위함
    var show_num = 3;
    var num = 0;

    var slideCopy = $('.slide:lt('+show_num+')').clone();   //현재 보여지는 3개의 이미지를 복사(.clone())한다.
    slideImg.append(slideCopy);                             //복사한 이미지 붙여넣기 한다.

    //이미지 움직이는 left, rigth 함수
    var left = function() {
        if(0 === num){
            num = slideCount;
            slideImg.css('margin-left', -num * slideWidth + 'px');
        }
        num--;
        slideImg.animate({'margin-left': -slideWidth * num +'px'},500);
    };
    var rigth = function() {
        if(num === slideCount){
            num = 0;
            slideImg.css('margin-left', num);
        }
        num++;
        slideImg.animate({'margin-left': -slideWidth * num +'px'},500);
    };

    //이미지 움직이는 left, rigth 함수를 조건에 따라 다르게 움직이게 하는 함수
    var ifs = function(e){
        if($(e.currentTarget).hasClass('prev')){
            left();
        } else {
            rigth();
        }
    }

    //버튼 클릭하기
    slideBtn.on('click','a', ifs);
});