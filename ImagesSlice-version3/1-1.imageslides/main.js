
// var slideImg = $('.slide_img');
//     var slides = slideImg.find('>div');   //슬라이드 이미지
//     var currentIndex = 0;                       //현재 이미지
//     var slideCount = slides.length;             //이미지 갯수

//     var showNext = function() {
//         var nextIndex = (currentIndex + 1) % slideCount;       //다음 이미지
       
//         slides.eq(currentIndex).hide();                      //현재 이미지 사라지게
//         slides.eq(nextIndex).fadeIn(400);                    //다음 이미지 나타나게
//         currentIndex = nextIndex;  
//     }


// $(function(){ 
//     setInterval(showNext, 3000); 
// });

(function(){
    class slideImg {
        constructor(ele, ele2){
            this._slideImg = ele;
            this._div = ele2
            this.slideCount = this._div.length;
            this.currentIndex = 0;  
        }

        setEle (){
            return this._div;
        }
        getEle (){
            var nextIndex = (this.currentIndex + 1) % this.slideCount
            this._div
            this.currentIndex = nextIndex;
        }
    }
    const slide_img = document.querySelector('.slide_img');
    const div = document.querySelectorAll('.slide_img > div');

    var test = new slideImg(slide_img, div);
    console.log(test.getEle());
    console.log( setInterval(test.getEle(), 3000))
})();