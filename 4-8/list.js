var products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];
var orgin_products = [
  { id: 0, price: 70000, title: "Blossom Dress" },
  { id: 1, price: 50000, title: "Springfield Shirt" },
  { id: 2, price: 60000, title: "Black Monastery" },
];
for (var i = 0; i < 3; i++) {
  $(".card-body h5").eq(i).html(products[i].title);
  $(".card-body p")
    .eq(i)
    .html("가격: " + products[i].price);
}

products.forEach(function (a, i) {
  var items = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100"></img>
    <h5>${a.title}</h5>
    <p>가격: ${a.price} </p>
    <button class="buy">구매</button>
  </div>`;
  $(".row").append(items);
});

$('.buy').click(function(e){
  var title = $(e.target).siblings('h5').text();
  if (localStorage.getItem('cart') != null ){
    var 꺼낸거 = JSON.parse(localStorage.cart);
    꺼낸거.push(title);
    localStorage.setItem('cart', JSON.stringify(꺼낸거));
  } else {
    localStorage.setItem('cart', JSON.stringify([title]))
  }
});



// var count = 0;
// $("#more").click(function () {
//   $("#select").addClass("show");
//   count++;
//   if (count === 1) {
//     $.get("https://codingapple1.github.io/js/more1.json ").done(function (
//       data
//     ) {
//       console.log(data);
//       data.forEach(function (a, i) {
//         var items = `<div class="col-sm-4">
//                 <img src="https://via.placeholder.com/600" class="w-100"></img>
//                 <h5>${a.title}</h5>
//                 <p>가격: ${a.price} </p>
//               </div>`;
//         $(".row").append(items);
//       });
//     });
//   } else if (count === 2) {
//     $.get("https://codingapple1.github.io/js/more2.json").done(function (data) {
//       console.log(data);
//       data.forEach(function (a, i) {
//         var items = `<div class="col-sm-4">
//                 <img src="https://via.placeholder.com/600" class="w-100"></img>
//                 <h5>${a.title}</h5>
//                 <p>가격: ${a.price} </p>
//               </div>`;
//         $(".row").append(items);
//       });
//       $("#more").css("display", "none");
//     });
//   }
// });

$("#price").click(function () {
  $("#select").addClass("show");
  products.sort(function (a, b) {
    return a.price - b.price;
  });
  $(".row").html("");
  products.forEach(function (a, i) {
    var items = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100"></img>
    <h5>${a.title}</h5>
    <p>가격: ${a.price} </p>
  </div>`;
    $(".row").append(items);
  });
});

$("#name").click(function () {
  $("#select").addClass("show");
  products.sort(function (a, b) {
    if (a.title > b.title) {
      return -1;
    } else {
      return 1;
    }
  });
  $(".row").html("");
  products.forEach(function (a, i) {
    var items = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100"></img>
    <h5>${a.title}</h5>
    <p>가격: ${a.price} </p>
  </div>`;
    $(".row").append(items);
  });
});
$("#under").click(function () {
  $("#select").toggleClass("show");
});

$("#select").eq(0).on("input", function () {
    var value = this.value;
    if (value == 70000) {
      var new_products = products.filter(function (a) {
        return a.price <= 70000;
      });
      $(".row").html("");
      new_products.forEach(function (a, i) {
        var items = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100"></img>
    <h5>${a.title}</h5>
    <p>가격: ${a.price} </p>
  </div>`;
        $(".row").append(items);
      });
    }
    else if(value==60000){
      var new_products = products.filter(function (a) {
        return a.price <= 60000;
      });
      $(".row").html("");
      new_products.forEach(function (a, i) {
        var items = `<div class="col-sm-4">
    <img src="https://via.placeholder.com/600" class="w-100"></img>
    <h5>${a.title}</h5>
    <p>가격: ${a.price} </p>
  </div>`;
        $(".row").append(items);
      });
    }
  });

$("#return").click(function () {
  $("#select").addClass("show");
  $(".row").html("");
  orgin_products.forEach(function (a, i) {
    var items = `<div class="col-sm-4">
      <img src="https://via.placeholder.com/600" class="w-100"></img>
      <h5>${a.title}</h5>
      <p>가격: ${a.price} </p>
    </div>`;
    $(".row").append(items);
  });
});
