
$(document).ready(function() {
    /*For the sticky navigation*/
       $('.js--section-page-2').waypoint(function(direction){
        if (direction =="down"){
            $('nav').addClass('nav-1');
        } else {
            $('nav').removeClass('nav-1');
        }

    }, {
      offset: '570px;'
    });


     $('h1').click(function(){
    $(this).css('background-color','#ff0000');
    })


 });

