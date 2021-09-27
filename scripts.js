const initialPrice = document.querySelector(".initial-price");
const numberOfStocks = document.querySelector(".number-of-stocks");
const currentPrice = document.querySelector(".current-price");
// const output = document.querySelector(".output");
const output = document.querySelector("h2");
const btn = document.querySelector("button");

function profitOrLoss(initial, final) {
  if (final > initial) {
    return `Profit`;
  } else if (final == initial) {
    return `Nill`;
  } else {
    return `Loss`;
  }
}

function difference(initial, final, count) {
  return Math.abs(final - initial) * count;
}
function percent(initial, final) {
  return Math.abs((final - initial) / initial) * 100;
}
function showMyStockPerformance() {
  if (profitOrLoss(initialPrice.value, currentPrice.value) === `Profit`) {
    output.innerHTML = `You made a profit of ₹${difference(
      initialPrice.value,
      currentPrice.value,
      numberOfStocks.value
    )} and profit percentage of ${percent(
      initialPrice.value,
      currentPrice.value
    )}%`;
    output.classList.remove("red");
    output.classList.remove("white");
    output.classList.add("green");
  } else if (profitOrLoss(initialPrice.value, currentPrice.value) === `Loss`) {
    output.innerHTML = `You made a loss of ₹${difference(
      initialPrice.value,
      currentPrice.value,
      numberOfStocks.value
    )} and loss percentage of ${percent(
      initialPrice.value,
      currentPrice.value
    )}%`;
    output.classList.remove("green");
    output.classList.remove("white");
    output.classList.add("red");
  } else if (profitOrLoss(initialPrice.value, currentPrice.value) === `Nill`) {
    output.innerHTML = `No pain No gain and No gain No pain`;
    output.classList.remove("green");
    output.classList.remove("red");
    output.classList.add("white");
  }
}

btn.addEventListener("click", () => showMyStockPerformance());
