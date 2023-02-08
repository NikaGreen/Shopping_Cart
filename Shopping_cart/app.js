let subtotal = 0;

const calculateTax = subtotal=>{
    const tax =subtotal * 0.13;
    const formattedTax = tax.toFixed(2);
    return formattedTax;
}

const shipping = calculateShipping(subtotal);
function calculateShipping(subtotal){
 
    if (subtotal <=15){
        return '$3.50';
    } else{
        return(" FREE SHIPPING")
    }
}

/*const calculateTotal = subtotal => {
    const tax = calculateTax(subtotal);
   const shipping= calculateShipping(subtotal);
    const total = parseFloat(subtotal) + parseFloat(tax)+ parseFloat(shipping);
    const formattedTotal = total.toFixed(2);
    return formattedTotal;
  };*/

  const calculateTotal = subtotal => {
    const tax = calculateTax(subtotal);
   const shipping= calculateShipping(subtotal);
   if (calculateShipping == 3.5){
    const total = parseFloat(subtotal) + parseFloat(tax)+ parseFloat(shipping);
    const formattedTotal = total.toFixed(2);
    return formattedTotal;
   }else{
    const total = parseFloat(subtotal) + parseFloat(tax);
    const formattedTotal = total.toFixed(2);
    return formattedTotal;
   }
  };  


  function getImgLink (x) {
    let imgLink;
    console.log(x);
    switch (x) {
      case 'frenchfrieswithketchup':
        imgLink = '/Users/nikagrinberg/Documents/JS_projects/Shopping_cart/img/fries.webp';
        break;   
      case 'hummus':
        imgLink = '/Users/nikagrinberg/Documents/JS_projects/Shopping_cart/img/hummus.png';
        break;
      case 'falafel':
        imgLink = '/Users/nikagrinberg/Documents/JS_projects/Shopping_cart/img/falafel.png';
        break;
      case 'tunasalad':
        imgLink = '/Users/nikagrinberg/Documents/JS_projects/Shopping_cart/img/tuna.png';
        break;
      case 'showerma':
        imgLink = '/Users/nikagrinberg/Documents/JS_projects/Shopping_cart/img/showerma.png';
        break;
      default:
        imgLink = '/Users/nikagrinberg/Documents/JS_projects/Shopping_cart/img/showerma.png';}
  
    return imgLink;
  };

  $('.add-button').on('click', function () {
    const title = $(this).data('title');
    const price = $(this).data('price');
    let rmbt = title.toLowerCase().replace(/\s/g,'');
    const imgLink = getImgLink(rmbt);
    
  
    const element = `
      <li class="cart-item" name="${title.toLowerCase().replace(/\s/g,'')}">
        <img src="${imgLink}" alt="${title}" >
        <div class="cart-item-dets">
          <p class="cart-item-heading">${title}</p>
          <p class="g-price">$${price}</p>
          <button  onclick="myFunction('${rmbt}')" class = 'remove_btn'>Remove</<button >

          <script> 
          function myFunction(rmbt) {
            //console.log(rmbt)
            let cart_item = document.getElementsByName(rmbt);
            //console.log(cart_item)
            cart_item[0].remove()
            

        } 
    
          </script>
        </div>
      </li>
    `;
    $('.cart-items').append(element);

    
  
    subtotal = subtotal + price;
  
    const formattedSubtotal = subtotal.toFixed(2);
    const tax = calculateTax(subtotal);
    const shipping =calculateShipping (subtotal);
    const total = calculateTotal(subtotal);
  
    $('.cart-math').html(`
      <p class="cart-math-item">
        <span class="cart-math-header">Subtotal:</span>
        <span class="g-price subtotal">$${formattedSubtotal}</span>
      </p>
      <p class="cart-math-item">
        <span class="cart-math-header">Tax:</span>
        <span class="g-price tax">$${tax}</span>
      </p>
      <p class="cart-math-item">
        <span class="cart-math-header">Shipping:</span>
        <span class="g-price tax">${shipping}</span>
      </p>
      <p class="cart-math-item">
        <span class="cart-math-header">Total:</span>
        <span class="g-price total">$${total}</span>
      </p>
    `);
  });

