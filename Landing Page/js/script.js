var scroll;
$(window).on('scroll', function(){

    var scrollTop = $(this).scrollTop();
    if(scrollTop + $(this).innerHeight() >= this.scrollHeight){
        console.log('End');

    }else if(scrollTop <= 0 ){
        $('nav').addClass('navbar-first');
        $('nav').removeClass('navbar-dark');
        $('nav').removeClass('navbar-scroll');
    }else{
        $('nav').removeClass('navbar-first');
        $('nav').addClass('navbar-dark');
        $('nav').addClass('navbar-scroll');
    }
    
})