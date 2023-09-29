export function selectDiv(event) {
  if (event.target.dataset.index) {
    window.selectedIndex = event.target.dataset.index
    selectParent()
  }
}


function selectParent(){
let parent = event.target.parentNode;
let selectedItems = document.querySelectorAll('.selectedItem');
selectedItems.forEach( element => element.classList.remove('selectedItem'));
parent.classList.add('selectedItem');
}

