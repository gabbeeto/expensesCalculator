import { displayList } from './../display/itemsOrLists.js'

const uploadButton = document.querySelector(`input[type='file']`);
uploadButton.addEventListener('change', updateStructure)

function updateStructure() {

  let myFile = uploadButton.files[0]
  let reader = new FileReader();

  reader.addEventListener('load', (event) => {

    window.list = JSON.parse(event.target.result)
    currentList = list[0];
    displayList()
  });

  reader.readAsText(myFile);
}


