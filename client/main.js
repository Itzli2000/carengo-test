var product = [{
  id: 1,
  title: 'hamburguesa',
  image: 'https://cdn3.cnet.com/img/zti-8maGznHRwm0Q6af0m7InwzM=/fit-in/970x0/2017/03/22/1c848061-a343-460a-a044-b07cb94e7927/if-burger.jpg',
  description: 'Mega hamburguesa',
  price: '100.00'
},{
  id: 2,
  title: 'hamburguesa',
  image: 'https://cdn3.cnet.com/img/zti-8maGznHRwm0Q6af0m7InwzM=/fit-in/970x0/2017/03/22/1c848061-a343-460a-a044-b07cb94e7927/if-burger.jpg',
  description: 'Mega hamburguesa',
  price: '100.00'
}]

var prod2 = JSON.parse('https://s3-us-west-2.amazonaws.com/lgoveabucket/data_melp.json');

console.log(product);
render(prod2);


function render(){
  var html = product.map(function(message,index){
    return(`
        <div class="message">
          <p>${message.id}</p>
          <p>${message.title}</p>
          <p>${message.image}</p>
          <p>${message.description}</p>
          <p>${message.price}</p>
        </div>
      `);
  }).join('  ');
  document.getElementById('messages').innerHTML = html;
}