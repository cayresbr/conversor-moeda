const convertButton = document.querySelector(".convert-button");
const currencyType = document.querySelector(".currency-type");
const currencyFrom = document.querySelector(".currency-from");

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


//Primeiro bloco de IFs para valores convertidos

  if (currencyType.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(inputCurrencyValue);
  }

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

//Segundo bloco de IFs para valores a serem convertidos


  if (currencyFrom.value == "real") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputCurrencyValue);
}

  if (currencyFrom.value == "dolar") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(inputCurrencyValue);
}

  if (currencyFrom.value == "euro") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR",
  }).format(inputCurrencyValue);
}

  if (currencyFrom.value == "libra") {
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(inputCurrencyValue);
}

}

function changeCurrencyFrom() {
  const currencyNameFrom = document.getElementById("currency-name-from");
  const currencyImg = document.querySelector(".currency-img-from");

  if (currencyFrom.value == "real") {
    currencyNameFrom.innerHTML = "Real Brasileiro";
    currencyImg.src = "./assets/brasil-logo.png";
  }

  if (currencyFrom.value == "dolar") {
    currencyNameFrom.innerHTML = "Dólar Americano";
    currencyImg.src = "./assets/us-logo.png";
  }

  if (currencyFrom.value == "euro") {
    currencyNameFrom.innerHTML = "Euro";
    currencyImg.src = "./assets/euro-logo.png";
  }

  if (currencyFrom.value == "libra") {
    currencyNameFrom.innerHTML = "Libra Esterlina";
    currencyImg.src = "./assets/libra-logo.png";
  }

  convertValues();
}

function changeCurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyImgTo = document.querySelector(".currency-img-to");

  if (currencyType.value == "real") {
    currencyName.innerHTML = "Real Brasileiro";
    currencyImgTo.src = "./assets/brasil-logo.png";
  }

  if (currencyType.value == "dolar") {
    currencyName.innerHTML = "Dólar Americano";
    currencyImgTo.src = "./assets/us-logo.png";
  }

  if (currencyType.value == "euro") {
    currencyName.innerHTML = "Euro";
    currencyImgTo.src = "./assets/euro-logo.png";
  }

  if (currencyType.value == "libra") {
    currencyName.innerHTML = "Libra Esterlina";
    currencyImgTo.src = "./assets/libra-logo.png";
  }

  convertValues();
}

currencyFrom.addEventListener("change", changeCurrencyFrom);
currencyType.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
