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

console.log(product);
render(product);


function render(){
  var html = product.map(function(message,index){
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
  document.getElementById('messages').innerHTML = html;
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