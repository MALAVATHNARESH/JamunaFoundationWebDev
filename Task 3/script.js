// Simple donation calculator logic

// Elements
const amountEl = document.getElementById("amount");
const resultEl = document.getElementById("result");
const showAmountBtn = document.getElementById("showAmount");
const showImpactBtn = document.getElementById("showImpact");
const tenPercentBtn = document.getElementById("tenPercent");
const resetBtn = document.getElementById("reset");
const rateLabel = document.getElementById("rateLabel");
const currencyEl = document.getElementById("currency");

// Config: 1 tree per 5 currency units
const TREES_PER_UNIT = 1 / 5;

// Helpers
function getAmount() {
  const v = parseFloat(amountEl.value);
  return Number.isFinite(v) && v > 0 ? v : null;
}

function formatCurrency(value) {
  const cur = currencyEl.value;
  if (cur === "USD") return "$" + value.toFixed(2);
  if (cur === "EUR") return "€" + value.toFixed(2);
  return "₹" + value.toFixed(2);
}

function show(text) {
  resultEl.textContent = text;
}

// Events
showAmountBtn.addEventListener("click", () => {
  const amt = getAmount();
  show(
    amt
      ? `Total Donation: ${formatCurrency(amt)}`
      : "Please enter a valid amount"
  );
});

showImpactBtn.addEventListener("click", () => {
  const amt = getAmount();
  show(
    amt
      ? `Estimated Trees: 🌳 ${Math.floor(amt * TREES_PER_UNIT)}`
      : "Please enter a valid amount"
  );
});

tenPercentBtn.addEventListener("click", () => {
  const amt = getAmount();
  show(
    amt
      ? `10% Recurring: ${formatCurrency(amt * 0.1)}`
      : "Please enter a valid amount"
  );
});

resetBtn.addEventListener("click", () => {
  amountEl.value = "";
  show("Enter an amount and pick an action");
});

// Update rate label when currency changes
currencyEl.addEventListener("change", () => {
  const symbol =
    currencyEl.value === "USD" ? "$" : currencyEl.value === "EUR" ? "€" : "₹";
  rateLabel.textContent = `1 tree per 5 ${symbol}`;
});
