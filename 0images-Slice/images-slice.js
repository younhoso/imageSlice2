$(function(){
    var el = $('.year-indicator');
    var active_index = 0;                                       //현재 활성화 된 값 저장 
    var slideCount = el.find('li').length;                      //엘리먼트에 전체 길이
    var timerIdHistory;

    var classAdd = function() {
        var index = el.find('li.on').index();                   //on 활성화 된 인덱스 값 
        var count = slideCount - 1;                             //엘리먼트에 전체 길이
        var speed = (slideCount === active_index) ? 0 : 4000;   //speed 조건에 의해서 6초 아니면 0초를 넣을수 있다.
        clearInterval(timerIdHistory);                          //여기에 취소를 하는 이유는 밑에서 classAdd를 2번 실행하기때문에 여기서 한번 걸러내주는 작업을 하는것이다.

        el.find('li').removeClass('on');
        el.find('li:eq('+ active_index +')').addClass('on');

        (index === count) ? active_index = 0 : active_index++;
        timerIdHistory = setInterval(classAdd, speed);
    }
    classAdd()

});