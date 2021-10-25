import { select, selectTo } from "./constents.js";
import { getFlagTo, getFlagFrom } from "./getFlag.js";
import { getExchange } from "./app.js";

export function switchCurrencies() {
  let tempCode = select.value;
  select.value = selectTo.value;
  selectTo.value = tempCode;
  getFlagTo(selectTo);
  getFlagFrom(select);
  getExchange();
}
