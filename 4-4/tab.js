// for(let i=0; i<$('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click',function(){
//        tap_open(i);
// });
// }

$('.list').click(function(e){
    tap_open(e.target.dataset.id);
})

function tap_open(i){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(i).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(i).addClass('show');
}
    
var car = {name: "소나타", price: [50000,3000,4000]};
$('.car_name').html(car.name); 
$('.car_price').html(car.price[0]);

