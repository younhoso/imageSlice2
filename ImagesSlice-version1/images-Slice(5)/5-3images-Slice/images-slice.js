$(function(){
   var $container = $('.slide_wrap'),
       $slideShow = $container.find('.slide_show'),
       $slideImg = $slideShow.find('.slide_img') ,
       $slides = $slideImg.find('.slide'),
       $slideBtn = $container.find('.slide_btn'),
       $slideDot = $container.find('.slide_dot'),
       $slide_count = $container.find('.slide_count'),

       slideCount = $slides.length,
       currentIndex = 0,     //현재 이미지
       dot = '',
       timer = '';


    //각 이미지 위치 잡기
    $slides.each(function(i){
        $(this).css({left: 100 * i +'%'});
        dot += "<a href='#0'>"+ i +"</a>";
        // dot += "<a href='#0'>"+ ("0"+(i+1)) +"</a>";
    });

    // 이미지 갯수만큼 닷 표시
    $slideDot.html(dot)

    // 이미지 움직이기
    var goSlide = function(index){
        $slideImg.animate({left: -100 * index + '%'}, 300);
        currentIndex = index;
        updateNav();
    };

    //count 업데이트 하기
    var updateNav = function(){
        var countCurrent = $slide_count.find('.currentIndex'),
            countTotal = $slide_count.find('.slideCount');

        //이미지 개수 표시
        countCurrent.text('0'+ (currentIndex + 1));
        countTotal.text('0'+(slideCount));

        //활성화된 이미지한테 닷 활성화 표시
        $slideDot.find('a').removeClass('active').eq(currentIndex).addClass('active');

        //활성화된 이미지한테 클래스 추가하기
        $slides.removeClass('active').eq(currentIndex).addClass('active');
    };

    //버튼 클릭하기
    $slideBtn.on('click','a', function(e){
        e.preventDefault();
        var nextIndex = (currentIndex + 1) % slideCount;    // 1,2,3,0,1,2,3,0 이런식으로 계산하는 로직
        var prevIndex = (currentIndex + (slideCount -1)) % slideCount;    // 3,2,1,0,3,2,1,0 이런식으로 계산하는 로직

            console.log("nextIndex"+nextIndex)
            // console.log("prevIndex"+prevIndex)

        if($(e.target).hasClass('prev')){
            goSlide(prevIndex);
        }else{
            goSlide(nextIndex);
        }
    });

    //닷 클릭했을 때 이동하기
    $slideDot.on('click','a',function(e){
        e.preventDefault();
        if(!$(e.target).hasClass('acitve')){    //acitve가 붙지 않은애들을 선택하기 위해서 부정을 쓴다.
            goSlide($(e.target).index());       //몇번째 버튼을 클릭했는지 알아낼려면 index()를 사용한다.
        }
    });

    // 타이머 설정하기
    var startTimer = function(){
        timer = setInterval(function(){
            var nextIndex = (currentIndex + 1) % slideCount    // 1,2,3,0,1,2,3,0 이런식으로 계산하는 로직
            goSlide(nextIndex);
        },2000);
    };
    startTimer();

    //마우스 오버하면 타이머 멈추기
    var stopTimer = function(){
        clearInterval(timer);
    };
    $container.on({
        mouseenter: stopTimer,
        mouseleave: startTimer
    });

    //첫 번째 이미지 슬라이드 활성화
    goSlide(currentIndex);

});