var product = [
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
          <p><strong>Id </strong>${message.id}</p>
          <p><strong>Producto </strong>${message.title}</p>
          <img src="${message.image}" alt="Product image" style="width:300px; height:auto;">
          <p><strong>Descripción </strong>${message.description}</p>
          <p><strong>Precio $</strong>${message.price}</p>
        </div>
      `);
  }).join('  ');
  document.getElementById('messages').innerHTML = html;
}