

const html = document.querySelector('html');
const darkModeButton = document.querySelector('header button')


window.switchToDarkMode = function() {
  html.classList.toggle('dark')
  if (html.className == 'dark') {
    darkModeButton.innerText = 'light mode';
  }
  else {
    darkModeButton.innerText = 'dark mode';
  }
}



darkModeButton.addEventListener('click', () =>{
  switchToDarkMode();
})

let isDarkModeEnabled = matchMedia('(prefers-color-scheme: dark)').matches
if (isDarkModeEnabled) {
  switchToDarkMode()


}





