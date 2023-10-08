const currencyButton = document.getElementById('currencyButton');
const currencyDialog = document.getElementById('currencyPopUp');
currencyButton.addEventListener('click', changeCurrency)

function changeCurrency(){
let originalCurrency = currencyDialog.querySelectorAll('input')[0].value

let transformedCurrency = currencyDialog.querySelectorAll('input')[1].value
let url = new URL(`https://cdn.jsdelivr.net/`)
url.pathname = `gh/fawazahmed0/currency-api@1/latest/currencies/${transformedCurrency}/${originalCurrency}.json`
console.log(url)
// fetch()



}
