const convertButton = document.querySelector(".convert-button");
const currencyType = document.querySelector(".currency-type");
const currencyFrom = document.querySelector(".currency-from");

const currencyInfo = {
  BRL: { name: "Real Brasileiro", img: "./assets/brasil-logo.png", locale: "pt-BR" },
  USD: { name: "Dólar Americano", img: "./assets/us-logo.png", locale: "en-US" },
  EUR: { name: "Euro", img: "./assets/euro-logo.png", locale: "de-DE" },
  GBP: { name: "Libra Esterlina", img: "./assets/libra-logo.png", locale: "en-GB" }
};

// Pega taxas da API
async function getRates() {
  const response = await fetch("https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,GBP-BRL");
  const data = await response.json();

  return {
    USD: parseFloat(data.USDBRL.high),
    EUR: parseFloat(data.EURBRL.high),
    GBP: parseFloat(data.GBPBRL.high),
    BRL: 1
  };
}

// Converte valores
async function convertValues() {
  const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value) || 0;

  const currencyValueToConvert = document.querySelector(".currencyValueToConvert");
  const currencyValueConverted = document.querySelector(".currencyValueConverted");

  const rates = await getRates();

  const from = currencyFrom.value;
  const to = currencyType.value;

  // Converte para BRL primeiro, depois para moeda final
  const valueInBRL = inputCurrencyValue * rates[from];
  const finalValue = valueInBRL / rates[to];

  // Atualiza o valor de origem
  currencyValueToConvert.innerHTML = new Intl.NumberFormat(currencyInfo[from].locale, {
    style: "currency",
    currency: from
  }).format(inputCurrencyValue);

  // Atualiza o valor convertido
  currencyValueConverted.innerHTML = new Intl.NumberFormat(currencyInfo[to].locale, {
    style: "currency",
    currency: to
  }).format(finalValue);
}

// Atualiza informações da moeda de origem
function changeCurrencyFrom() {
  const currencyNameFrom = document.getElementById("currency-name-from");
  const currencyImg = document.querySelector(".currency-img-from");

  const from = currencyFrom.value;
  currencyNameFrom.innerHTML = currencyInfo[from].name;
  currencyImg.src = currencyInfo[from].img;

  // Atualiza valor mostrado mesmo sem clicar
  const inputCurrencyValue = parseFloat(document.querySelector(".input-currency").value) || 0;
  document.querySelector(".currencyValueToConvert").innerHTML = new Intl.NumberFormat(currencyInfo[from].locale, {
    style: "currency",
    currency: from
  }).format(inputCurrencyValue);

  convertValues();
}

// Atualiza informações da moeda de destino
function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImgTo = document.querySelector(".currency-img-to");

  const to = currencyType.value;
  currencyName.innerHTML = currencyInfo[to].name;
  currencyImgTo.src = currencyInfo[to].img;

  convertValues();
}

currencyFrom.addEventListener("change", changeCurrencyFrom);
currencyType.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
