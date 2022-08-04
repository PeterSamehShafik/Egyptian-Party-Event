"use strict";

//loading Screen
$(document).ready(function(){
    $('.loading-screen').fadeOut(500)
    $('body').css('overflow','auto')
})
// end of loading screen


// Navbar
let navWidth = '250px'; //navbar total width
function toggleNav(){ //toggling the navbar
    let currentNavWidth = $("body").css('margin-left'); //get the current state
    //if hidden then show it & vice versa
    if(currentNavWidth == '0px'){
        $('nav').show(0)
        $('nav').animate({'width':navWidth})
        $('body').animate({'margin-left':navWidth})        
    }else{
        $('body').animate({'margin-left':'0px'})
        $('nav').animate({'width':'0px'})
        $('nav').hide(0)
    }
}
$('.nav-open, .close-nav span').click(toggleNav) // add event tot buttons
$('.singer h3').click(function(){ //add event &the mechanism of the work 
    $('.singer-info').removeClass('opened'); // removing any opened class before
    $(this).siblings('div').addClass('opened') // adding opened class to the clicked one
    
    $('.singer-info:not(.opened)').slideUp(); //sliding up any other singer
    $(this).siblings('div').slideToggle() // open/close the clicked singer
});
//end of navbar


//counter
let year = 2022,
    month = 6,
    day =29;
let counter= setInterval(()=>{
        let todayDate = new Date(),
            date = new Date(year,month-1,day),
            diff = date-todayDate, // total diffrence in microseconds
            remainHours = 23-todayDate.getHours(),
            remainMinutes = 59-todayDate.getMinutes(),
            remainSeconds = 59-todayDate.getSeconds(),
            remainDays = Math.floor(diff/1000/60/60/24);
    
        //check if it is a validate date
        if(remainDays<0){ // if not
            $('.expired').show(1000);
            clearInterval(counter)
        }else{ //if it's a validate date
            //display counter
            $('.count').show(1000);
            $('#days').html(`${remainDays}`);
            $('#hours').html(`${remainHours}`);
            $('#minutes').html(`${remainMinutes}`);
            $('#seconds').html(`${remainSeconds}`)
        }
    }    
,1000) //counter interval
//end of counter


//message counter
$('.contact textarea').keyup(function(){

    $('#remainChar').html(100-$(this).val().length)
})
//end of msg counter