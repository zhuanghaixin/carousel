// var allButtons = $('#buttons>button');
// for (let i = 0; i < allButtons.length; i++) {
//     $(allButtons[i]).on('click', function(x) {
//         console.log(x.currentTarget);
//         var index = $(x.currentTarget).index();
//         var n=-300*index;
//         $('#images').css({
//             transform: 'translateX(' + n + 'px)'
//         });
//     });
//
// }
// var lens=allButtons.length;
// var n=0;
// allButtons.eq(n%lens).trigger('click').addClass('red').siblings().removeClass('red');
// var timerId=setInterval(()=>{
//     n++;
// //   console.log(n%lens);
//     allButtons.eq(n%lens).trigger('click').addClass('red').siblings().removeClass('red');
// },1000);
//
// $('.window').on('mouseenter',function(){
//     clearInterval(timerId);
// })
// $('.window').on('mouseleave',function(){
//     var timerId=setInterval(()=>{
//         n++;
// //   console.log(n%lens);
//         allButtons.eq(n%lens).trigger('click').addClass('red').siblings().removeClass('red');
//     },1000);
// })


/*代码优化*/
var allButtons = $('#buttons>button');
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function(x) {
        console.log(x.currentTarget);
        var index = $(x.currentTarget).index();
        var p=-300*index;
        $('#images').css({
            transform: 'translateX(' + p + 'px)'
        });
//
        n=index;
        activeButton(index);

    });
}

var lens=allButtons.length;
var n=0;

allButtons.eq(n%lens).trigger('click');
var timerId=setTimer();

$('.window').on('mouseenter',function(){
    clearInterval(timerId);
});

$('.window').on('mouseleave',function(){
    timerId=setTimer();
})


function activeButton(index){
    allButtons.eq(index).addClass('red').siblings().removeClass('red');
}

function playSlide(index){
    allButtons.eq(index).trigger('click');
}
function setTimer(){
    return setInterval(()=>{
        n++;
        playSlide(n%lens);
    },1000);

}