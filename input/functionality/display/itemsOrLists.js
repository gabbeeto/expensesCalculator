const container = document.getElementById('list');

export function displayList(){
container.innerHTML = '';
for(let item of currentList){
let nameText =  document.createElement('p');
nameText.innerText = item.name;
nameText.style.color = item.color()
container.append(nameText);
}
}
