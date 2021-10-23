$(document).ready(function () {
    
    $(".navbar").hide();

    $(function () { 
        $(window).scroll(function () {  
            //si on scroll de 140px alors la navbar apparait sinon elle reste hiden
            if ($(this).scrollTop() > 140) {
                $('.navbar').fadeIn();
            }else {
                $('.navbar').fadeOut();
            }
        })
     })

});