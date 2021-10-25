import { selectTo, select, input, exchangeIcon } from "./constents.js";
import { getExchange } from "./app.js";
import { getFlagTo, getFlagFrom } from "./getFlag.js";
import { switchCurrencies } from "./switchBtn.js";

//to listener
export const flagTo = selectTo.addEventListener("change", (e) => {
  getFlagTo(selectTo);
});
// from listener
export const flagFrom = select.addEventListener("change", (e) => {
  getFlagFrom(select);
});

//get exchange
export const exchange = input.addEventListener("input", () => {
  getExchange();
});

//switch currencies
export const switchCur = exchangeIcon.addEventListener("click", () => {
  switchCurrencies();
});
