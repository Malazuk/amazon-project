export let cart = JSON.parse(localStorage.getItem('cart')); 

if (!cart) {
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
}, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
}];
}

export function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function checkMatchingProduct(productId) {
  let matchingItem;
    cart.forEach((cartItem) => {
      if (productId === cartItem.productId) {
        matchingItem = cartItem;
      } 
    });
    return matchingItem;
}
export function addToCart(productId) {
  const itemQuantity = document.querySelector(`.js-quantity-container-${productId}`);
  const quantity = Number(itemQuantity.value);
  const matchingItem = checkMatchingProduct(productId);
    if (matchingItem) {
      matchingItem.quantity += quantity
    } else {
      cart.push({
        productId: productId,
        quantity: quantity,
        deliveryOptionId: '1'
      });
      
    } 
    saveToStorage();
  }

  export function removeFromCart(productId){
    const newCart = [];
    cart.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
      }
      
    });
    cart = newCart;
    saveToStorage();
  }
 
  export function calculateCartQuantity() {
    // 
    let cartQuantity = 0;
      cart.forEach((cartItem) => {
        cartQuantity += cartItem.quantity;
        // cartQuantity += itemQuantity;
      })
     return cartQuantity;
  }

  export function updateQuantity(productId, newQuantity) {
    const matchingItem = checkMatchingProduct(productId);
    matchingItem.quantity = newQuantity;
    saveToStorage();
  }

  export function updateDeliveryOption(productId, deliveryOptionId) {
    const matchingItem = checkMatchingProduct(productId);
    
    matchingItem.deliveryOptionId = deliveryOptionId
    saveToStorage();
    
  }
