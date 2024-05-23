// JavaScript code to handle dynamic behavior

// Get the cart items element
var cartItemsElement = document.getElementById('cart-items');

// Add event listeners to "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll('#products .product button');
addToCartButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get product details
    var productElement = button.parentNode;
    var productName = productElement.querySelector('h3').textContent;
    var productPrice = productElement.querySelector('p').textContent;

    // Create a new cart item element
    var cartItemElement = document.createElement('li');
    cartItemElement.classList.add('cart-item');
    cartItemElement.textContent = productName + ' - ' + productPrice;

    // Add the cart item to the cart items list
    cartItemsElement.appendChild(cartItemElement);
  });
});

// Add event listener to "Checkout" button
var checkoutButton = document.getElementById('checkout');
checkoutButton.addEventListener('click', function() {
  // Clear the cart items
  cartItemsElement.innerHTML = 'Cart is empty';
});
