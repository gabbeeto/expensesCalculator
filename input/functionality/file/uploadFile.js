import { displayList } from './../display/itemsOrLists.js'

const uploadButton = document.querySelector(`input[type='file']`);
uploadButton.addEventListener('change', updateStructure)

function updateStructure() {

  let myFile = uploadButton.files[0]
  let reader = new FileReader();

  reader.addEventListener('load', (event) => {

    let listAndColor = JSON.parse(event.target.result)
    window.list = listAndColor[0];
    window.color = listAndColor[1];
    currentList = list[0];
    displayList()
  });

  reader.readAsText(myFile);
}


