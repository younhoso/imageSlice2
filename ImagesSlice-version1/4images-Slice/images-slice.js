$(function(){
    var container = $('.slide_wrap');
    var slideShow = container.find('.slide_show');
    var slideImg = slideShow.find('.slide_img');
    var slides = slideImg.find('>div');
    var slideBtn = container.find('.slide_btn');
    var slideDot = container.find('.slide_dot');

    var slideCount = slides.length;
    var currentIndex = 0;   //현재 이미지
    var dot = '';

    // 각 이미지의 위치 잡기
    slides.each(function(i){
        $(this).css({left: 100 * i + '%'});
        dot += "<a href='#0'></a>";
        //dot += "<a href='#0'>"+(i + 1)+"</a>";
    });

    //이미지 갯수만큼 닷 표시
    slideDot.html(dot);

    //이미지 움직이는 함수 (념겨받은 인자를 통해서 왼쪽, 오른쪽 움직인다.)
    var goSlide = function(i){
        slideImg.animate({left: -100 * i +'%'},300);
        currentIndex = i;
        updateNav();
    }

    //버튼 활성화 / 비활성화하기
    var updateNav = function() {
        var btnPrev = slideBtn.find('.prev');
        var btnNext = slideBtn.find('.next');

        //첫번째 이미지 - 왼쪽 버튼 사라지게
        if(currentIndex === 0){
            btnPrev.addClass('disabled');
        }else {
            btnPrev.removeClass('disabled');
        }

        //마지막 이미지 - 오른쪽 버튼 사라지게
        if(currentIndex === slideCount - 1){
            btnNext.addClass('disabled');
        }else {
            btnNext.removeClass('disabled');
        }

        //a에 active 있는것들 제거하고, 활성화된 이미지한테만 닷 활성화 표시
        slideDot.find('a').removeClass('active').eq(currentIndex).addClass('active');
    }

    slideBtn.on('click','a', function(){
        if( $(this).hasClass('prev') ){
            goSlide(currentIndex - 1);  // (현재 이미지 -1) 을 인자를 념겨준다. click힐떼마다 (현재 이미지 -1)는 계산된다.
        }else{
            goSlide(currentIndex + 1);  // (현재 이미지 +1) 을 인자를 념겨준다. click힐떼마다 (현재 이미지 +1)는 계산된다.
        }
    });

    //첫 번째 이미지 활성화
    goSlide(currentIndex)
   
});