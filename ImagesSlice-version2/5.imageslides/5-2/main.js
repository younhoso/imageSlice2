
var $container = $('.slide_wrap'),
    $slideShow = $container.find('.slide_show'),
    $slideImg = $slideShow.find('.slide_img'),
    $slides = $slideImg.find('>div'),
    $slideBtn = $container.find('.slide_btn'),
    $slideDot = $container.find('.slide_dot'),
    $slide_count = $container.find('.slide_count'),
    
    slideCount = $slides.length,
    currentIndex = 0,  //현재 이미지
    dot = '',
    timer = '';

    //각 이미지 위치 잡기
    $slides.each(function(i){
        $(this).css({'left': 100 * i + '%'});
        //var name = $(this).find('img').attr('alt');
        // dot += '<a href="#0">'+name+'</a>';         //이미지 갯수만큼 닷이 이름 추가하기
        dot += '<a href="#0">'+('0'+(i+1))+'</a>';     //이미지 갯수만큼 닷이 자동으로 추가된다.
    });

    //이미지 객수만큼 닷 표시
    $slideDot.html(dot);

    // 이미지 움직이기
    var gotoSlidek = function(index) {
        $slideImg.animate({ left: -100 * index+'%' },300);
        currentIndex = index;
        updateNav();
    };

    //슬라이드 갯수 활성화
    var updateNav = function(){
        var countCurrent = $slide_count.find('.currentIndex'),
            countTotal = $slide_count.find('.slideCount');

            //이미지 갯수 표시
            countCurrent.text('0'+(currentIndex + 1));
            countTotal.text('0'+slideCount);

            //활성화된 이미지한테 닷 활성화 표시
            $slideDot.find('a').removeClass('active').eq(currentIndex).addClass('active');

            //활성화된 이미지한테 클래스 추가하기
            $slides.removeClass('active').eq(currentIndex).addClass('active');
    };

    //자동으로 타이머 설정하기
    var startTimer = function() {
        timer = setInterval(function(){
            var nextIndex = (currentIndex + 1) % slideCount;
            gotoSlidek(nextIndex);
        },1500);
    };
    

    //마우스 오버하면 타이머 멈추기
    var stopTimer = function() {
        clearInterval(timer);
    };

$(function(){
    // 첫 번째 이미지 슬리이드 활성화;
    gotoSlidek(currentIndex);
    startTimer(); //자동으로 타이머 설정하기 활성화

    //좌,우버튼 클릭하기
    $slideBtn.on('click','a',function(e){
        e.preventDefault();

        //이미지 처음으로 돌려보네기
        var nextIndex = (currentIndex + 1) % slideCount;
        var prevIndex = (currentIndex + (slideCount -1)) % slideCount;
        /** prevIndex는 이런식으로 계산이 된다.(공식)
            0 + 3 = 3 % 4 = 3
            3 + 3 = 6 % 4 = 2
            2 + 3 = 5 % 4 = 1
            1 + 3 = 4 % 4 = 0
         */
        
        if($(this).hasClass('prev')){
            gotoSlidek(prevIndex);
        }else{
            gotoSlidek(nextIndex);
        }
    });

    //닷 클릭했을때 이동하기
    $slideDot.on('click','a',function(e){
        e.preventDefault();
        if(!$(this).hasClass('active')){    //this에 active가 없는 엘리먼트에 
            gotoSlidek($(this).index());    // 해당 index값을 인자로 넣어준다.
        }
    });

    $container.on({
        mouseenter: stopTimer,
        mouseleave: startTimer
    })
});