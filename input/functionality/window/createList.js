const editButton = document.querySelector('#listContainer button');
const addNewListButton = document.querySelector('#listContainer button:nth-of-type(2)');

const addNewListDialog = document.getElementById('addNewListPopUp');
const editDialog = document.getElementById('editPopUp');


for (let closeBtn of document.querySelectorAll('.closeBtn')) {
  closeBtn.addEventListener('click', closePopUp)
}

editButton.addEventListener('click', () => {
  openWindow(editDialog)
}
);
addNewListButton.addEventListener('click', () => {
  openWindow(addNewListDialog)
}
);

function openWindow(dialog) {
  dialog.showModal()
}

function closePopUp() {
  for (let dialog of document.querySelectorAll('dialog')) {
    if (dialog.open) {
      dialog.close()
    }
  }
}
