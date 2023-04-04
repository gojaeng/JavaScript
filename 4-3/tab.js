// for(let i=0; i<$('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click',function(){
//        tap_open(i);
// });
// }


function tap_open(i){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
}