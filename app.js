const cfg = window.SANATANI_CONFIG;
let selectedProduct = null;

const money = value => new Intl.NumberFormat('en-IN', {
  style: 'currency', currency: cfg.currency, maximumFractionDigits: 0
}).format(value);

function waLink(message) {
  return `https://wa.me/${cfg.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  [7, 11, 21].forEach(() => {});
  const series = [7, 11, 21];
  grid.innerHTML = series.map(q => {
    const orange = cfg.products.find(p => p.id === `${q}-orange`);
    const yellow = cfg.products.find(p => p.id === `${q}-yellow`);
    return `<article class="product-card">
      <div class="product-image-wrap"><img src="assets/sanatani-diya-banner.jpg" alt="${q} Diya Series" loading="lazy"></div>
      <div class="product-top"><span class="series">${q} Diya Series</span><span class="price">${money(orange.price)}</span></div>
      <p>${orange.description}</p>
      <div class="colors"><span class="color orange">● Orange</span><span class="color yellow">● Yellow</span></div>
      <div class="buy-row">
        <select id="color-${q}" aria-label="Choose colour">
          <option value="${orange.id}">Orange</option>
          <option value="${yellow.id}">Yellow</option>
        </select>
        <button class="btn primary" onclick="openOrder(document.getElementById('color-${q}').value)">Buy Now</button>
      </div>
    </article>`;
  }).join('');
}

function openOrder(id) {
  selectedProduct = cfg.products.find(p => p.id === id);
  if (!selectedProduct) return;
  document.getElementById('modalTitle').textContent = `${selectedProduct.series} Diya Series — ${selectedProduct.color}`;
  document.getElementById('modalSummary').textContent = `${selectedProduct.description} Price: ${money(selectedProduct.price)} per set.`;
  document.querySelector('#orderForm [name="quantity"]').value = 1;
  document.getElementById('orderModal').classList.remove('hidden');
  document.body.classList.add('no-scroll');
}

function closeOrder() {
  document.getElementById('orderModal').classList.add('hidden');
  document.body.classList.remove('no-scroll');
}

function makeMessage(data) {
  const total = selectedProduct.price * Number(data.quantity || 1);
  return `Hello ${cfg.storeName}, I want to order:%0A%0A` +
    `Product: ${selectedProduct.series} Diya Series%0A` +
    `Colour: ${selectedProduct.color}%0A` +
    `Quantity: ${data.quantity}%0A` +
    `Price: ${money(total)}%0A` +
    `Name: ${data.name}%0A` +
    `Mobile: ${data.phone}%0A` +
    `City/PIN: ${data.location}`;
}

function submitOrder(event) {
  event.preventDefault();
  if (!selectedProduct) return;
  const data = Object.fromEntries(new FormData(event.target).entries());
  window.open(`https://wa.me/${cfg.whatsappNumber}?text=${makeMessage(data)}`, '_blank', 'noopener');
}

function payOnline() {
  if (!selectedProduct) return;
  const link = cfg.paymentLinks[selectedProduct.id];
  if (!link) {
    alert('Online payment is not configured yet. Add the Razorpay Payment Link for this product in config.js.');
    return;
  }
  window.open(link, '_blank', 'noopener');
}

document.getElementById('year').textContent = new Date().getFullYear();
const generalMessage = `Hello ${cfg.storeName}, I want to place an order.`;
document.getElementById('heroWhatsApp').href = waLink(generalMessage);
document.getElementById('contactWhatsApp').href = waLink(generalMessage);
document.getElementById('closeModal').addEventListener('click', closeOrder);
document.getElementById('paymentButton').addEventListener('click', payOnline);
document.getElementById('orderForm').addEventListener('submit', submitOrder);
document.getElementById('orderModal').addEventListener('click', e => { if (e.target.id === 'orderModal') closeOrder(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeOrder(); });
renderProducts();
