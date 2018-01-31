var product = [
{
  "id": "0",
  "title": 'Hamburguesa',
  "image": "https://cdn3.cnet.com/img/zti-8maGznHRwm0Q6af0m7InwzM=/fit-in/970x0/2017/03/22/1c848061-a343-460a-a044-b07cb94e7927/if-burger.jpg",
  "description": "Mega hamburgues",
  "price": "10.00",
},
{
  "id": "0",
  "title": 'Hamburguesa',
  "image": "https://cdn3.cnet.com/img/zti-8maGznHRwm0Q6af0m7InwzM=/fit-in/970x0/2017/03/22/1c848061-a343-460a-a044-b07cb94e7927/if-burger.jpg",
  "description": "Mega hamburgues",
  "price": "10.00",
},
{
  "id": "0",
  "title": 'Hamburguesa',
  "image": "https://cdn3.cnet.com/img/zti-8maGznHRwm0Q6af0m7InwzM=/fit-in/970x0/2017/03/22/1c848061-a343-460a-a044-b07cb94e7927/if-burger.jpg",
  "description": "Mega hamburgues",
  "price": "10.00",
},
]

// Get data from data.txt and convert it to js object
var txtFile = new XMLHttpRequest();
txtFile.open("GET", "http://localhost:6677/data.txt", true);
txtFile.onreadystatechange = function() {
  if (txtFile.readyState === 4) {
    if (txtFile.status === 200) {
      var string = "0,1";
      allText = txtFile.responseText;
      var stringArray = (new Function("return [" + string+ "];")());
      var objectStringArray = (new Function("return [" + allText+ "];")());
      product = objectStringArray;
      console.log(product);
    }
  }
}
txtFile.send(null);

var slc = 2;
var prod = product.slice(0, slc);


render(prod);


function render(){
  var html = prod.map(function(message,index){
    return(`
      <div class="message">
      <p><strong>Producto </strong>${message.title}</p>
      <hr>
      <img src="${message.image}" alt="Product image" style="height:auto;">
      <p><strong>Descripción </strong>${message.description}</p>
      <p><strong>Precio $</strong>${message.price}</p>
      </div>
      `);
  }).join('  ');

  var total = product.length;
  var current = prod.length;
  document.getElementById('messages').innerHTML = html;
  document.getElementById('current').innerHTML = current;
  document.getElementById('total').innerHTML = total;
}

var slideIndex = 0;
showSlides(slideIndex);

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
    slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000);
}


document.addEventListener("scroll", function (event) {
  console.log(prod);
  checkForscroll(prod);
});

var checkForscroll = function () {
  console.log('entro');
  var lastDiv = document.querySelector("#messages > div:last-child");
  var lastDivOffset = lastDiv.offsetTop + lastDiv.clientHeight;
  var pageOffset = window.pageYOffset + window.innerHeight;

  if (pageOffset > lastDivOffset) {
    slc = slc + 2;
    prod = product.slice(0, slc);
    console.log(slc);
    render(prod);
  }
};

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("title");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}