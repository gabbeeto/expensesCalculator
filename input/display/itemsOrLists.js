const container = document.getElementById('list');

export function displayList(){
container.innerHTML = '';
for(let item of currentList){
let nameText =  document.createElement('p');
nameText.innerText = item.name;
console.log(item.color())
nameText.style.backgroundColor = item.color()
container.append(nameText);
}
}
