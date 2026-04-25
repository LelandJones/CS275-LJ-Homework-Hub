let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCheckout() {
  const container = document.getElementById("checkout-container");
  const totalEl = document.getElementById("checkout-total");

  if (!container) return;

  container.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;

    const div = document.createElement("div");

    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>Brand: ${item.brand}</p>
      <p>Price: $${item.price}</p>
      <hr>
    `;

    container.appendChild(div);
  });

  totalEl.innerText = "Total: $" + total;
}

function placeOrder() {
  alert("Order placed successfully!");

  localStorage.removeItem("cart");
  window.location.href = "index.html";
}

renderCheckout();