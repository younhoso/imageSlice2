
var container = $('.slide_wrap'),
    slideShow = container.find('.slide_show'),
    slideImg = slideShow.find('.slide_img'),
    slideImgDiv = slideImg.find('>div'),
    slideBtn = container.find('.slide_btn'),
    slideDot = container.find('.slide_dot');

var slideImgSize = slideImgDiv.length;
var currentIndex = 0;
var dot = '';

//각 이미지의 위치 잡기
slideImgDiv.each(function(i) {
   $(this).css({'left': 100 * i + '%'});
   dot += "<a href='#0'>"+(i+1)+"</a>";  
});
//이미지 객수만큼 닷이 자동으로 추가된다.
slideDot.html(dot);

//이미지 움직이기
var gotoSlide = function(index) {
    slideImg.animate({'left': -100 * index + '%'},300);
    // -1 == 100%(오른쪽)
    // 0 == 0
    // 1 == -100%(왼쪽)
    currentIndex = index;
    updateNav();
};

//버튼 활성화 / 비활성화하기
var updateNav = function() {
    var btnPrev = slideBtn.find('.prev');
    var btnNext = slideBtn.find('.next');

    //첫번째 이미지 - 왼쪽 버튼 사라지게
    if(currentIndex === 0) {
        btnPrev.addClass('disabled');
    }else{
        btnPrev.removeClass('disabled');
    }

    //마지막 이미지 - 오른쪽 버튼 사라지게
    if(currentIndex === slideImgSize - 1) {
        btnNext.addClass('disabled');
    }else{
        btnNext.removeClass('disabled');
    }

    //활성화된 이미지한테 닷 활성화 표시
    slideDot.find('a').removeClass('active').eq(currentIndex).addClass('active');   //해당 이미지 말고, 나머지 형제들은 active 삭제 하고, 해당 이미지는 active 추가
};

$(function(){
    // 첫 번째 이미지 활성화
    gotoSlide(currentIndex);

    slideBtn.on('click','a',function(){
        if($(this).hasClass('prev')){
            gotoSlide(currentIndex - 1);
        } else {
            gotoSlide(currentIndex + 1);
        }
        
    });
});