$(function(){
    var container = $('.slide_wrap');
    var slideShow = container.find('.slide_show');
    var slideImg = slideShow.find('.slide_img');
    var slides = slideImg.find(">div");             //각각의 슬라이드 이미지
    var slideBtn = container.find(".slide_btn")     //슬라이드 버튼

    var slideCount = slides.length;                 //이미지 개수
    var currentIndex = 0;                           //현재 이미지z

    //이미지 움직이기
    var left = function (){
        if(0 < currentIndex){
            slideImg.animate({left: "+=1200px"},300);
            currentIndex--;
        }
    }
    var rigth = function (){
        if(slideCount - 1 > currentIndex){
            slideImg.animate({left: "-=1200px"},300);
            currentIndex++;
        }
    }

    slideBtn.on('click','a',function(e){
        ($(e.currentTarget).hasClass('prev')) ? left() : rigth();
    })    
});