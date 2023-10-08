const currencyButton = document.getElementById('currencyButton');
const currencyDialog = document.getElementById('currencyPopUp');
currencyButton.addEventListener('click', changeCurrency)

async function changeCurrency() {
  let originalCurrency = currencyDialog.querySelectorAll('input')[0].value

  let transformedCurrency = currencyDialog.querySelectorAll('input')[1].value
  let url = new URL(`https://cdn.jsdelivr.net/`)
  url.pathname = `gh/fawazahmed0/currency-api@1/latest/currencies/${transformedCurrency}/${originalCurrency}.json`

  let fetchResponse = await fetch(url)
  let fetchData = await fetchResponse.json()
  let currencyValue = getCurrency(fetchData)
  iterateAndChangePrices(currencyValue)

}


function getCurrency(data) {
  let keys = Object.keys(data)
  let objectData = keys.map((key) => {
    return {keys : data[key] } 
  })
  let [date,currency] =  objectData
  currency = Number(currency.keys);
  return currency
}


function iterateAndChangePrices(currencyPrice){
  for(let currentList of list){
    currentList.array.map(item => {
    item.price = item.price / currencyPrice;
    return item;})
  }
}
