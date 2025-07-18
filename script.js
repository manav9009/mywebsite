let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cart.forEach(entry => {
    const li = document.createElement("li");
    li.textContent = `${entry.item} - ₹${entry.price}`;
    cartList.appendChild(li);
  });
  document.getElementById("total").textContent = `Total: ₹${total}`;
}
 