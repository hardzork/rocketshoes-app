export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}
export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return { type: '@cart/REMOVE', id };
}

export function updateProductAmountRequest(id, amount) {
  return {
    type: '@cart/UPDATE_PRODUCT_AMOUNT_REQUEST',
    id,
    amount,
  };
}

export function updateProductAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_PRODUCT_AMOUNT_SUCCESS',
    id,
    amount,
  };
}
