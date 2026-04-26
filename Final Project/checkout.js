const cart = JSON.parse(localStorage.getItem("cart")) || [];

/* =========================
   CALCULATE TOTAL
========================= */
function getTotal() {
  return cart.reduce((sum, item) => {
    const drillingCost = item.drilling ? 25 : 0;
    return sum + item.price + drillingCost;
  }, 0);
}

/* =========================
   RENDER CHECKOUT
========================= */
function renderCheckout() {
  const container = document.getElementById("checkout-items");
  const totalEl = document.getElementById("checkout-total");

  if (!container) return;

  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = "<p>Your cart is empty.</p>";
    totalEl.innerText = "Total: $0";
    return;
  }

  cart.forEach(item => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Base Price: $${item.price}</p>

      <p>
        Drilling: 
        ${item.drilling ? "$25" : "No"}
      </p>

      <p>
        <strong>Item Total: $${item.price + (item.drilling ? 25 : 0)}</strong>
      </p>

      <hr>
    `;

    container.appendChild(div);
  });

  totalEl.innerText = `Total: $${getTotal()}`;
}

/* =========================
   PLACE ORDER
========================= */
function placeOrder() {
  alert("Order placed successfully! 🎳");

  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

/* =========================
   INIT
========================= */
renderCheckout();