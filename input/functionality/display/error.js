let popUp = document.getElementById('errorPopUp');
let h2 = popUp.querySelector('h2');


export function displayError(message) {
  h2.innerText = message;
  showPopUp()
}

function showPopUp() {
  setTimeout(() => { popUp.showModal(),
  changeOpacity()
  }, 200)
}



function changeOpacity() {
  setTimeout(() => {
  h2.style.opacity = '1',
  popUp.style.opacity = '1',
  hideOpacity()
  }, 1000)
}


function hideOpacity() {
  setTimeout(() => { 
  h2.style.opacity = '0',
  popUp.style.opacity = '1',
  hideDialog()
  }, 3000)
  
}

function hideDialog() {
  setTimeout(() => { popUp.close() }, 1000)
}


