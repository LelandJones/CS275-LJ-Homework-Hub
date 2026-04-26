let allBalls = [];
let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* =========================
   CART FUNCTIONS
========================= */
function addToCart(ball) {
  const newItem = {
    ...ball,
    drilling: false // default
  };

  cart.push(newItem);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function toggleDrilling(index) {
  const item = cart[index];

  item.drilling = !item.drilling;

  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
}

/* =========================
   CART TOTAL
========================= */
function getCartTotal() {
  return cart.reduce((sum, item) => {
    const drillingCost = item.drilling ? 25 : 0;
    return sum + (item.price || 0) + drillingCost;
  }, 0);
}

/* =========================
   RENDER CART (WITH DRILLING)
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
  <p><strong>${item.name || "Untitled Ball"}</strong></p>
  <p>Base Price: $${item.price || 0}</p>

  <div class="cart-controls">
      <label>
        <input 
          type="checkbox" 
          ${item.drilling ? "checked" : ""}
          onchange="toggleDrilling(${index})"
        >
        Add Drilling (+$25)
      </label>

      <button onclick="removeFromCart(${index})">
       Remove
      </button>
    </div>

    <hr>
  `;

    cartItems.appendChild(div);
  });

  if (cartTotal) {
    cartTotal.innerText = `Total: $${getCartTotal()}`;
  }
}

/* =========================
   NAVIGATION
========================= */
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
  let filtered = [...allBalls];

  if (filters.brand) {
    filtered = filtered.filter(b =>
      (b.brand || "").toLowerCase() === filters.brand.toLowerCase()
    );
  }

  if (filters.oil) {
    filtered = filtered.filter(b =>
      (b.oilRating || "").toLowerCase() === filters.oil.toLowerCase()
    );
  }

  if (filters.motion) {
    filtered = filtered.filter(b =>
      (b.ballMotion || "").toLowerCase() === filters.motion.toLowerCase()
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
   RENDER PRODUCTS (NO DRILLING HERE)
========================= */
function renderProducts(data) {
  const container = document.getElementById("ball-container");

  if (!container) return;

  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "<p>No bowling balls found.</p>";
    return;
  }

  data.forEach(ball => {
    const div = document.createElement("div");

    div.innerHTML = `
      <h2>${ball.name || "Untitled Ball"}</h2>
      <p><strong>Brand:</strong> ${ball.brand || "Unknown"}</p>
      <p><strong>RG:</strong> ${ball.rg || "N/A"}</p>
      <p><strong>Diff:</strong> ${ball.diff || "N/A"}</p>
      <p><strong>Oil:</strong> ${ball.oilRating || "N/A"}</p>
      <p><strong>Motion:</strong> ${ball.ballMotion || "N/A"}</p>
      <p><strong>Price:</strong> $${ball.price || 0}</p>

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
    allBalls = data;

    renderProducts(allBalls);
    populateFilters(allBalls);
    setupFilters();
    renderCart();
  })
  .catch(err => console.error("Fetch error:", err));

/* =========================
   TESTS
========================= */
function runTests() {
  let passed = 0;
  let failed = 0;

  function test(condition, message) {
    if (condition) {
      console.log("✅ PASS:", message);
      passed++;
    } else {
      console.error("❌ FAIL:", message);
      failed++;
    }
  }

  test(Array.isArray(allBalls), "Data should be an array");
  test(allBalls.length > 0, "Data should not be empty");

  renderProducts(allBalls);

  const renderedItems = document.querySelectorAll("#ball-container div");

  test(
    renderedItems.length === allBalls.length,
    "Rendered items match dataset"
  );

  const before = JSON.stringify(allBalls);
  applyFilters();
  const after = JSON.stringify(allBalls);

  test(before === after, "No mutation occurs");

  renderProducts([]);
  const container = document.getElementById("ball-container");

  test(
    container.innerText.includes("No bowling balls"),
    "Empty state works"
  );

  test(
  allBalls.every(b => typeof b.price === "number"),
  "All items have numeric price values"
);

  document.getElementById("test-results").innerHTML = `
    <p>Passed: ${passed}</p>
    <p>Failed: ${failed}</p>
  `;

  applyFilters();
  renderCart();
}