const initialPrice = document.querySelector(".initial-price");
const numberOfStocks = document.querySelector(".number-of-stocks");
const currentPrice = document.querySelector(".current-price");
const output = document.querySelector(".output");
const btn = document.querySelector("button");

function profitOrLoss(initial, final) {
  if (final > initial) {
    return true;
  } else {
    return false;
  }
}

function showMyStockPerformance() {}

btn.addEventListener("click", () => showMyStockPerformance());
