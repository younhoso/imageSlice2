
var slidesFor = function(ele, ele2) {
    dot = '';
     //각 이미지 위치 잡기
     ele.each(function(i){
        $(this).css({left: 100 * i +'%'});
        dot += "<a href='#0'>"+ i +"</a>";
        // dot += "<a href='#0'>"+ ("0"+(i+1)) +"</a>";
    });

    // 이미지 갯수만큼 닷 표시
    ele2.html(dot)
}

// 이미지 움직이기
var goSlide = function(index, ele) {
    console.log(ele)
    ele.animate({left: -100 * index + '%'}, 300);
    currentIndex = index;
}

 //버튼 클릭하기
var addEvents = function(ele) {
    var slideImg = $('.slide_img');
    var slideCount = $('.slide').length;

    ele.on('click','a', function(e){
        e.preventDefault();
        var nextIndex = (currentIndex + 1) % slideCount;                  // 1,2,3,0,1,2,3,0 이런식으로 계산하는 로직
        var prevIndex = (currentIndex + (slideCount -1)) % slideCount;    // 3,2,1,0,3,2,1,0 이런식으로 계산하는 로직
            console.log("nextIndex"+nextIndex)
            // console.log("prevIndex"+prevIndex)
        if($(e.target).hasClass('prev')){
            goSlide(prevIndex, slideImg);
        }else{
            goSlide(nextIndex, slideImg);
        }
    });
}

$(function(){
   var $container = $('.slide_wrap'),
       $slideShow = $container.find('.slide_show'),
       $slides = $slideShow.find('.slide'),
       $slideBtn = $container.find('.slide_btn'),
       $slideDot = $container.find('.slide_dot'),
       $slide_count = $container.find('.slide_count');
       currentIndex = 0;     //현재 이미지

    slidesFor($slides, $slideDot);
    addEvents($slideBtn);
   
});