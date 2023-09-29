export function selectItemDiv(event) {
  if (event.target.dataset.index) {
    window.selectedIndex = event.target.dataset.index
    selectParent(event)
  }
}


export function selectListDiv(){
alert('this works')

}


function selectParent(event){
let parent = event.target.parentNode;
let selectedItems = document.querySelectorAll('.selectedItem');
selectedItems.forEach( element => element.classList.remove('selectedItem'));
parent.classList.add('selectedItem');
}

