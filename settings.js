// --- Back to Dashboard ---
document.getElementById("backBtn").addEventListener("click", () => {
  window.location.href = "dashboard.html";
});

// --- Load Saved Settings ---
window.addEventListener("DOMContentLoaded", () => {
  const theme = localStorage.getItem("theme") || "default";
  const autoConnect = localStorage.getItem("autoConnect") === "true";
  const wifiNetworks = JSON.parse(localStorage.getItem("wifiNetworks") || "[]");

  document.getElementById("themeSelect").value = theme;
  document.getElementById("autoConnect").checked = autoConnect;
  renderWiFiList(wifiNetworks);
  applyTheme(theme);
});

// --- Save Settings ---
document.getElementById("saveBtn").addEventListener("click", () => {
  const theme = document.getElementById("themeSelect").value;
  const autoConnect = document.getElementById("autoConnect").checked;

  localStorage.setItem("theme", theme);
  localStorage.setItem("autoConnect", autoConnect);

  alert("✅ Settings saved!");
  applyTheme(theme);
});

// --- Render Wi-Fi List ---
function renderWiFiList(networks) {
  const list = document.getElementById("wifiList");
  list.innerHTML = networks.length
    ? networks.map(n => `<div class="wifi-item">📶 ${n}</div>`).join("")
    : "<p>No Wi-Fi networks saved yet.</p>";
}

// --- Apply Theme ---
function applyTheme(theme) {
  const body = document.body;
  if (theme === "blue") body.style.background = "linear-gradient(135deg, #1e90ff, #3742fa)";
  else if (theme === "dark") body.style.background = "linear-gradient(135deg, #000, #2f3542)";
  else if (theme === "green") body.style.background = "linear-gradient(135deg, #00ff99, #009966)";
  else body.style.background = "linear-gradient(135deg, #1e272e, #485460)";
}
