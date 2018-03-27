$(function () {
    var carouselList = $(".carouselList"),
        carouselNav = $(".carousel-indicators"),
        left = $(".fa-angle-left"),
        right = $(".fa-angle-right"),
        LEFT_DIRECTION = "left",
        RIGHT_DIRECTION = "right";


    var indicators = carouselNav.find("li");
    indicators.first().addClass("active");




    function movePhoto(direction) {
        currentIndex = indicators.siblings('.active').index();

        nextIndex = currentIndex;
        switch (direction) {
            case RIGHT_DIRECTION:
                if (currentIndex == indicators.length - 1) {
                    nextIndex = 0;
                } else {
                    nextIndex++;
                }
                carouselList.animate({
                    "margin-left": -700
                }, 800, moveFirstSlide);

                break;
            case LEFT_DIRECTION:
                if (currentIndex == 0) {
                    nextIndex = indicators.length - 1;
                } else {
                    nextIndex--;
                }
                 moveLastSlide();
             
                break;
        }

        indicators.removeClass("active").eq(nextIndex).addClass("active");
    }


    function moveFirstSlide() {
        var firstItem = carouselList.find('li:first');
        var lastItem = carouselList.find('li:last');

        lastItem.after(firstItem);
        carouselList.css({
            "margin-left": 0
        });
    }

    function moveLastSlide() {
         carouselList.css({
                'margin-left': -700
            })
        var firstItem = carouselList.find("li:first");
        var lastItem = carouselList.find("li:last");
        firstItem.before(lastItem);
        carouselList.animate({
            'margin-left': 0
        },800);
    }

    
//      function moveLastSlide() {
//         carouselList.css({
//                'margin-left': -700
//            })
//        var firstItem = carouselList.find("li:first");
//        var lastItem = carouselList.find("li:last");
//        firstItem.before(lastItem);
//        carouselList.css({
//            'margin-left': -700
//        });
//    }


    function moveSlider(nextIndex) {

        carouselList.animate({
            "margin-left": -700
        }, moveFirstSlide);
        indicators.removeClass("active").eq(nextIndex).addClass("active");
    };



    function ChangeSlide() {

        currentIndex = indicators.siblings('.active').index();
        nextIndex = currentIndex;
        if (currentIndex == indicators.length - 1) {
            nextIndex = 0;
        } else {
            nextIndex++;
        }
        moveSlider(nextIndex);
    };


    var autoMove = setInterval(function () {
        ChangeSlide();
    }, 6000);
    

    left.click(function () {
        if (!carouselList.is(':animated')) {
            movePhoto(LEFT_DIRECTION);
        }
    });


    right.click(function () {
        if (!carouselList.is(':animated')) {
            movePhoto(RIGHT_DIRECTION);
        }
    });
    
    
    
    
        indicators.click(function () {
        nextIndex = $(this).index();
        currentIndex = indicators.siblings('.active').index();
            var distance = currentIndex - nextIndex;
            var prevSlide = false;
            if(distance < 0){
                prevSlide = true;
                distance = distance * -1;
            }
            for (let i = 0; i < distance; i++ ) {
                if (prevSlide) {
                    
                     movePhoto(RIGHT_DIRECTION);
                }else {
                     movePhoto(LEFT_DIRECTION);
                }
            }

//		indicators.removeClass("active").eq(nextIndex).addClass("active");

    });
    
        
//    indicators.click(function () {
//        nextIndex = $(this).index();
//        currentIndex = indicators.siblings('.active').index();
//            var distance = currentIndex - nextIndex;
//            var prevSlide = false;
//            if(distance < 0){
//                prevSlide = true;
//                distance = distance * -1;
//            }
//            
//                if (prevSlide) {
//                    carouselList.animate({
//                    "margin-left": -700 * distance
//                }, moveFirstSlide);
//                }else {
//                     carouselList.css({
//                'margin-left': -700 * distance
//            })
//        var firstItem = carouselList.find("li:first");
//        var lastItem = carouselList.find("li:last");
//        firstItem.before(lastItem);
//        carouselList.animate({
//            'margin-left': 0
//        });
//                }
//            
//
//		indicators.removeClass("active").eq(nextIndex).addClass("active");
//
//    });
//    
    
    
    
    
    
    
    
//    indicators.click(function () {
//        nextIndex = $(this).index();
//        currentIndex = indicators.siblings('.active').index();
//            var distance = currentIndex - nextIndex;
//            var prevSlide = false;
//            if(distance < 0){
//                prevSlide = true;
//                distance = distance * -1;
//            }
//            for (let i = 0; i < distance; i++ ) {
//                if (prevSlide) {
//                    carouselList.animate({
//                    "margin-left": -700
//                }, moveFirstSlide);
//                }else {
//                      moveLastSlide();
//                }
//            }
//
//		indicators.removeClass("active").eq(nextIndex).addClass("active");
//
//    });
//    

//    
//        indicators.click(function () {
//        nextIndex = $(this).index();
//        currentIndex = indicators.siblings('.active').index();
//            carouselList.stop().animate({"left": -700 * nextIndex});
//            indicators.removeClass("active").eq(nextIndex).addClass("active");
//        })
});
