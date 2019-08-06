export function addToCart(product) {
  return {
    type: '@cart/ADD',
    product,
  };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}

export function updateProductAmount(id, amount) {
  return {
    type: '@cart/UPDATE_PRODUCT_AMOUNT',
    id,
    amount,
  };
}
