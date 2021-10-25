import { currencies } from "./data.js";
import {
  select,
  selectTo,
  input,
  line1,
  line2,
  line3,
  line4,
  exchangeIcon,
} from "./constents.js";
import { flagFrom, flagTo, exchange, switchCur } from "./addListener.js";

currencies.forEach((cur) => {
  const { abbreviation, name } = cur;

  const options = document.createElement("option");
  select.appendChild(options);
  options.textContent = `  ${abbreviation}`;
  const optionTo = document.createElement("option");
  selectTo.appendChild(optionTo);
  optionTo.innerHTML = ` <option value='Eur' selected >${abbreviation}</option>`;
});

export const getExchange = async function () {
  const key = "bbe51f40a3fa93271cc473ab";
  const url = `https://v6.exchangerate-api.com/v6/${key}/latest/${from.value}`;
  const res = await fetch(url);
  const data = await res.json();
  let currenciesRate = data.conversion_rates[selectTo.value];
  let totalRate = (input.value * currenciesRate).toFixed(2);
  line2.textContent = ` ${input.value} ${select.value} =`;
  line1.textContent = `${totalRate} ${selectTo.value}`;
  line3.textContent = `1 ${select.value}  =  ${currenciesRate} ${selectTo.value}`;
  line4.textContent = `1 ${selectTo.value}  =  ${currenciesRate} ${select.value}`;
};
getExchange().catch((err) => {
  alert(`err:${err}`);
});
