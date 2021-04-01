//variabls
const next =document.querySelector('.next');
const prev =document.querySelector('.prev');
const slider = document.querySelector('.slider-track');


let move = 0;
let timer;

//Events
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
//function
function timeGo(){
 timer = setTimeout (nextSlide,3000)  
}
timeGo()



function nextSlide() {
    move -= 400;
    
    if(move < -1200){
        move = 400;
    } else {
        slider.style.left = move + 'px';
    }
    clearTimeout(timer)
    timeGo()
}


function prevSlide() {
    if(move == 0){
        move = -1200;
    } else {
    move += 400;
    }
    slider.style.left = move + 'px';
    clearTimeout(timer)
}



// $('.garanty_click').on('click',function (e) {
//     e.preventDefault();
//     if($('.prompt_title').hasClass('remove')){
//         $('.prompt_title').removeClass('remove')
//     }
//     else{
//         $('.prompt_title').addClass('remove')
//     }
 
// })

// $('.garanty_hide').on('click', function(e){
//     e.preventDefault()
//     if($('.prompt_title').hasClass('remove')){
//         $('.prompt_title').removeClass('remove')
//     }
//     else{
//         $('.prompt_title').addClass('remove')
//     }

// })

// // tooltips  Tippy.js
// $(function () {
//   $('[data-toggle="tooltip"]').tooltip()
// })


$('.prompt_title').hide();
$('.garanty_click').click(function (e) {
    e.preventDefault();
    $('.prompt_title').show(500);
})
$('.prompt_title2').hide();
$('.garanty_click2').click(function (e) {
    e.preventDefault();
    $('.prompt_title2').show(500);
})
$('.prompt_title3').hide();
$('.garanty_click3').click(function (e) {
    e.preventDefault();
    $('.prompt_title3').show(500);
})
$('.prompt_title4').hide();
$('.garanty_click4').click(function (e) {
    e.preventDefault();
    $('.prompt_title4').show(500);
})
$('.prompt_title5').hide();
$('.garanty_click5').click(function (e) {
    e.preventDefault();
    $('.prompt_title5').show(500);
})



$('.garanty_hide').click(function (e) {
    e.preventDefault();
    if ($('.prompt_title').show(500)) {
        $('.prompt_title').hide()
    }
    
})
$('.garanty_hide').click(function (e) {
    e.preventDefault();
    if ($('.prompt_title2').show(500)) {
        $('.prompt_title2').hide()
    }
    
})
$('.garanty_hide').click(function (e) {
    e.preventDefault();
    if ($('.prompt_title3').show(500)) {
        $('.prompt_title3').hide()
    }
    
})
$('.garanty_hide').click(function (e) {
    e.preventDefault();
    if ($('.prompt_title4').show(500)) {
        $('.prompt_title4').hide()
    }
    
})
$('.garanty_hide').click(function (e) {
    e.preventDefault();
    if ($('.prompt_title5').show(500)) {
        $('.prompt_title5').hide()
    }
    
})

function typing(element) {
    let inner = element.html(),
    fullText = '',
    letterCount = 0,
    interval = setInterval(function () {
        fullText += inner[letterCount];
        element.html(fullText)
        letterCount++;
        if (fullText == inner) {
            clearInterval(interval)
        }
    

    },100)
}

typing($('.header_content__title'))
