const convertButton = document.querySelector(".convert-button");
const currencyType = document.querySelector(".currency-type");

function convertValues() {
  const inputCurrencyValue = document.querySelector(".input-currency").value;

  const currencyValueToConvert = document.querySelector(
    ".currencyValueToConvert"
  );

  const currencyValueConverted = document.querySelector(
    ".currencyValueConverted"
  );

  const dolarToday = 5.5;
  const euroToday = 7;
  const libraToday = 8;

  if (currencyType.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputCurrencyValue / dolarToday);
  }
  if (currencyType.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputCurrencyValue / euroToday);
  }
  if (currencyType.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
    }).format(inputCurrencyValue / libraToday);
  }

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImg = document.querySelector(".currency-img");

  if (currencyType.value == "dolar") {
    currencyName.innerHTML = "Dolar Americano";
    currencyImg.src = "./assets/us-logo.png"
  }

  if (currencyType.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImg.src = "./assets/euro-logo.png"
  }

  if (currencyType.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImg.src = "./assets/libra-logo.png"
  }

  convertValues()
}

currencyType.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
