const convertButton = document.querySelector(".convert-button")

function convertValues(){

  const inputCurrencyValue = document.querySelector(".input-currency").value

  const currencyValueToConvert = document.querySelector(".currencyValueToConvert")

  const currencyValueConverted = document.querySelector(".currencyValueConverted")

  const dolarToday = 5.5

  const convertedValue = inputCurrencyValue / dolarToday

  currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  }).format(inputCurrencyValue)

  currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(convertedValue)
}

convertButton.addEventListener("click", convertValues)

