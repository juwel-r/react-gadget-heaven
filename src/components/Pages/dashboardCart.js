// Cart List =====>>>>
const storedCartList = () => {
  const storedCart = localStorage.getItem("cart");
  let cart = [];
  if (storedCart) {
    cart = JSON.parse(storedCart);
    return cart;
  }
  return cart;
};
 
const setLS = (id) => {
  const storedCart = storedCartList();
  storedCart.push(id);
  localStorage.setItem("cart", JSON.stringify(storedCart));
};

//  Wish List ========>>>>
const storedWishList = () => {
  const storedCart = localStorage.getItem("wishList");
  let cart = [];
  if (storedCart) {
    cart = JSON.parse(storedCart);
    return cart;
  }
  return cart;
};

const setWishLS = (id) => {
  const storedCart = storedWishList();
  storedCart.push(id);
  localStorage.setItem("wishList", JSON.stringify(storedCart));
};

export { setLS, storedCartList, storedWishList, setWishLS };
