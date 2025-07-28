// Konfigurasi MSURG Pack
const msurgPack = {
  items: [
    { name: "Surg-E", qtyPerPack: 5 },
    { name: "Surgical Anesthetic", qtyPerPack: 20 },
    { name: "Surgical Antibiotics", qtyPerPack: 20 },
    { name: "Surgical Antiseptic", qtyPerPack: 20 },
    { name: "Surgical Clamp", qtyPerPack: 20 },
    { name: "Surgical Defibrillator", qtyPerPack: 20 },
    { name: "Surgical Lab Kit", qtyPerPack: 20 },
    { name: "Surgical Pins", qtyPerPack: 20 },
    { name: "Surgical Scalpel", qtyPerPack: 20 },
    { name: "Surgical Splint", qtyPerPack: 20 },
    { name: "Surgical Sponge", qtyPerPack: 20 },
    { name: "Surgical Stitches", qtyPerPack: 20 },
    { name: "Surgical Transfusion", qtyPerPack: 20 },
    { name: "Surgical Ultrasound", qtyPerPack: 20 }
  ]
};

// Elemen DOM
const packCountInput = document.getElementById("packCount");
const packRateInput = document.getElementById("packRate");
const itemTableBody = document.querySelector("#itemTable tbody");
const totalModalEl = document.getElementById("totalModal");
const totalRevenueEl = document.getElementById("totalRevenue");
const totalProfitEl = document.getElementById("totalProfit");
const profitPercentEl = document.getElementById("profitPercent");

// Inisialisasi
function init() {
  renderItemTable();
  packCountInput.addEventListener("input", calculateAll);
  packRateInput.addEventListener("input", calculateAll);
}

// Render tabel item
function renderItemTable() {
  itemTableBody.innerHTML = msurgPack.items.map(item => `
    <tr data-item="${item.name}">
      <td>${item.name}</td>
      <td>${item.qtyPerPack}</td>
      <td><input type="text" class="price-input" placeholder="e.g., 20/1"></td>
      <td class="total-qty">${item.qtyPerPack}</td>
      <td class="total-wl">0</td>
    </tr>
  `).join("");

  // Set event listeners untuk input harga
  document.querySelectorAll(".price-input").forEach(input => {
    input.addEventListener("input", calculateItem);
  });
}

// Hitung per item
function calculateItem(e) {
  const row = e.target.closest("tr");
  const itemName = row.dataset.item;
  const itemData = msurgPack.items.find(item => item.name === itemName);
  const packCount = parseInt(packCountInput.value) || 0;
  
  // Parse harga (format: qty/wl)
  const priceText = e.target.value;
  let pricePerQty = 0;
  
  if (priceText && priceText.includes("/")) {
    const [qty, wl] = priceText.split("/").map(Number);
    if (qty > 0 && wl > 0) {
      pricePerQty = wl / qty;
    }
  }
  
  // Hitung total
  const totalQty = itemData.qtyPerPack * packCount;
  const totalWL = totalQty * pricePerQty;
  
  // Update tampilan
  row.querySelector(".total-qty").textContent = totalQty;
  row.querySelector(".total-wl").textContent = totalWL.toFixed(2);
  
  calculateTotal();
}

// Hitung total keseluruhan
function calculateTotal() {
  const packCount = parseInt(packCountInput.value) || 0;
  const packRate = parseInt(packRateInput.value) || 0;
  
  // Hitung modal
  const totalModal = packCount * packRate;
  totalModalEl.textContent = totalModal;
  
  // Hitung revenue
  let totalRevenue = 0;
  document.querySelectorAll(".total-wl").forEach(cell => {
    totalRevenue += parseFloat(cell.textContent) || 0;
  });
  
  totalRevenueEl.textContent = totalRevenue.toFixed(2);
  
  // Hitung profit
  const profit = totalRevenue - totalModal;
  const profitPercent = totalModal > 0 ? (profit / totalModal) * 100 : 0;
  
  totalProfitEl.textContent = profit.toFixed(2);
  profitPercentEl.textContent = profitPercent.toFixed(2) + "%";
  
  // Warna profit/rugi
  if (profit >= 0) {
    totalProfitEl.style.color = "#4ade80";
    profitPercentEl.style.color = "#4ade80";
  } else {
    totalProfitEl.style.color = "#f87171";
    profitPercentEl.style.color = "#f87171";
  }
}

// Hitung semua saat input berubah
function calculateAll() {
  const packCount = parseInt(packCountInput.value) || 0;
  
  // Update total qty semua item
  msurgPack.items.forEach(item => {
    const row = document.querySelector(`tr[data-item="${item.name}"]`);
    if (row) {
      const totalQty = item.qtyPerPack * packCount;
      row.querySelector(".total-qty").textContent = totalQty;
      
      // Trigger recalculate jika sudah ada harga
      const priceInput = row.querySelector(".price-input");
      if (priceInput.value) {
        const event = new Event("input");
        priceInput.dispatchEvent(event);
      }
    }
  });
  
  calculateTotal();
}

// Jalankan aplikasi
document.addEventListener("DOMContentLoaded", init);
