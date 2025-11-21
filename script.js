/* ===========================
   SIMPLE CART + STOCK SYSTEM
=========================== */

let cart = [];
let stockMap = {}; // store stock counts

/* ====== CART PERSISTENCE ====== */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem("cart");
  cart = saved ? JSON.parse(saved) : [];
}

/* ====== CART UI ====== */
function renderCart() {
  const cartDiv = document.getElementById("cartContents");
  if (!cartDiv) return;

  if (cart.length === 0) {
    cartDiv.innerHTML = "<div class='cart-empty'>Your cart is empty.</div>";
    document.getElementById("checkoutBtn").disabled =
