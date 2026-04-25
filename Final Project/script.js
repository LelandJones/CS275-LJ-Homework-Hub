let allBalls = [];
let cart = [];

/* =========================
   CART FUNCTIONS
========================= */
function addToCart(ball) {
  cart.push(ball);
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}

/* =========================
   CART TOTAL
========================= */
function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price, 0);
}

/* =========================
   RENDER CART
========================= */
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTitle = document.querySelector("#cart h2");
  const cartTotal = document.getElementById("cart-total");

  if (!cartItems || !cartTitle) return;

  cartTitle.innerText = `Cart (${cart.length})`;

  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <p><strong>${item.name}</strong></p>
      <p>Price: $${item.price}</p>
      <button onclick="removeFromCart(${index})">Remove</button>
      <hr>
    `;

    cartItems.appendChild(div);
  });

  // update total
  if (cartTotal) {
    cartTotal.innerText = `Total: $${getCartTotal()}`;
  }
}

function goToCheckout() {
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "checkout.html";
}

/* =========================
   FILTER STATE
========================= */
const filters = {
  brand: "",
  oil: "",
  motion: ""
};

/* =========================
   APPLY FILTERS
========================= */
function applyFilters() {
  let filtered = allBalls;

  if (filters.brand) {
    filtered = filtered.filter(b =>
      b.brand.toLowerCase() === filters.brand.toLowerCase()
    );
  }

  if (filters.oil) {
    filtered = filtered.filter(b =>
      b.oilRating.toLowerCase() === filters.oil.toLowerCase()
    );
  }

  if (filters.motion) {
    filtered = filtered.filter(b =>
      b.ballMotion.toLowerCase() === filters.motion.toLowerCase()
    );
  }

  renderProducts(filtered);
}

/* =========================
   FILTER SETUP
========================= */
function setupFilters() {
  const brandFilter = document.getElementById("brandFilter");
  const oilFilter = document.getElementById("oilFilter");
  const motionFilter = document.getElementById("motionFilter");

  if (!brandFilter || !oilFilter || !motionFilter) return;

  brandFilter.addEventListener("change", e => {
    filters.brand = e.target.value;
    applyFilters();
  });

  oilFilter.addEventListener("change", e => {
    filters.oil = e.target.value;
    applyFilters();
  });

  motionFilter.addEventListener("change", e => {
    filters.motion = e.target.value;
    applyFilters();
  });
}

/* =========================
   POPULATE FILTERS
========================= */
function populateFilters(data) {
  const brandFilter = document.getElementById("brandFilter");
  const oilFilter = document.getElementById("oilFilter");
  const motionFilter = document.getElementById("motionFilter");

  if (!brandFilter || !oilFilter || !motionFilter) return;

  const brands = [...new Set(data.map(b => b.brand))];
  const oils = [...new Set(data.map(b => b.oilRating))];
  const motions = [...new Set(data.map(b => b.ballMotion))];

  brands.forEach(b => {
    brandFilter.innerHTML += `<option value="${b}">${b}</option>`;
  });

  oils.forEach(o => {
    oilFilter.innerHTML += `<option value="${o}">${o}</option>`;
  });

  motions.forEach(m => {
    motionFilter.innerHTML += `<option value="${m}">${m}</option>`;
  });
}

/* =========================
   RENDER PRODUCTS
========================= */
function renderProducts(data) {
  const container = document.getElementById("ball-container");

  if (!container) return;

  container.innerHTML = "";

  data.forEach(ball => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h2>${ball.name}</h2>
      <p><strong>Brand:</strong> ${ball.brand}</p>
      <p><strong>RG:</strong> ${ball.rg}</p>
      <p><strong>Diff:</strong> ${ball.diff}</p>
      <p><strong>Oil:</strong> ${ball.oilRating}</p>
      <p><strong>Motion:</strong> ${ball.ballMotion}</p>

      <p><strong>Price:</strong> $${ball.price}</p>

      <button onclick='addToCart(${JSON.stringify(ball)})'>
        Add to Cart
      </button>

      <hr>
    `;

    container.appendChild(div);
  });
}

/* =========================
   FETCH DATA
========================= */
fetch("./api/data.json")
  .then(res => res.json())
  .then(data => {
    console.log("DATA RECEIVED:", data);

    allBalls = data;

    renderProducts(allBalls);
    populateFilters(allBalls);   // ✅ ADD THIS
    setupFilters();              // ✅ AND THIS
  })
  .catch(err => console.error("Fetch error:", err));