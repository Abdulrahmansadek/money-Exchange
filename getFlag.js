import { currencies } from "./data.js";
import { input, select, selectTo, line2, line1 } from "./constents.js";

export const getFlagTo = function (element) {
  const imgUrl = element.value;
  currencies.forEach((cur) => {
    if (cur.abbreviation === imgUrl) {
      const imgTag = document.querySelectorAll(".flag");

      imgTag[1].src = `https://www.countryflags.io/${cur.symbol}/flat/64.png`;
      line1.textContent = `${input.value} ${selectTo.value}  -  ${cur.name} `;
    }
  });
};

export const getFlagFrom = function (element) {
  const imgUrl = element.value;
  currencies.forEach((cur) => {
    if (cur.abbreviation === imgUrl) {
      const imgTag = document.querySelectorAll(".flag");
      imgTag[0].src = `https://www.countryflags.io/${cur.symbol}/flat/64.png`;
      line2.textContent = ` ${input.value} ${select.value}  -  ${cur.name}  =  `;
    }
  });
};
