// Konfigurasi Pack
const packs = {
  msurg: {
    name: "MSURG",
    items: ["Magic Stone", "Starboard", "Uranium", "Ruby", "Golden"],
    modal: 24
  },
  surg: {
    name: "SURG",
    items: ["Stone", "Uranium", "Ruby", "Golden"],
    modal: 18
  },
  lgrid: {
    name: "LGRID",
    items: ["Ladder", "Grid", "Icy", "Dirt"],
    modal: 12
  }
};

// Inisialisasi
document.addEventListener("DOMContentLoaded", () => {
  loadPack("msurg");
  setupEventListeners();
});

function loadPack(packId) {
  const pack = packs[packId];
  const itemGrid = document.getElementById(`${packId}-pack`);
  
  // Set modal default
  document.getElementById("modal").value = pack.modal;
  
  // Generate item cards
  itemGrid.innerHTML = pack.items.map(item => `
    <div class="item-card">
      <h3>${item}</h3>
      <input type="text" data-item="${item}" placeholder="Qty/WL" class="price-input">
      <div class="item-total" data-item="${item}-total">0 WL</div>
    </div>
  `).join("");
  
  // Aktifkan input listeners
  document.querySelectorAll(".price-input").forEach(input => {
    input.addEventListener("input", calculateProfit);
  });
}

function calculateProfit() {
  // Implementasi perhitungan profit
  // (Mirip dengan contoh sebelumnya)
}

function setupEventListeners() {
  // Switch tema
  document.getElementById("themeToggle").addEventListener("click", () => {
    document.documentElement.setAttribute("data-theme", 
      document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"
    );
  });
  
  // Switch pack
  document.querySelectorAll(".pack-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".pack-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      loadPack(this.dataset.pack);
    });
  });
}
