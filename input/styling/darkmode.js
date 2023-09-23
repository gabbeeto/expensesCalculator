const html = document.querySelector('html');

const isDarkModeEnabled = matchMedia('(prefers-color-scheme: dark)').matches 
if(isDarkModeEnabled){
switchToDarkMode()


}





function switchToDarkMode(){
html.classList.toggle('dark')
}

