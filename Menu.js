// JavaScript for managing sidebar menu
const menuItems = document.querySelectorAll('.menu-item')
const menu = document.getElementById('side-menu')
const main = document.getElementById('main-view')

menuItems.forEach(item => {
  item.addEventListener('click', () => {
    // Add functionality here for menu item clicks
    // For example, you can toggle active class for styling or navigate to a different page
    console.log(`Clicked ${item.textContent}`)
  })
})

function toggleSidebar() {
  menu.classList.toggle('expanded')
  main.classList.toggle('expanded')
}

let mainBody = document.getElementById('contenido-principal')



function showPageMask(){
  let pageMask = document.createElement('div');
  pageMask.id = 'page-mask';
  mainBody.appendChild(pageMask)
}

let sessionMenu = document.getElementById("session-menu")

// JavaScript to show/hide the session menu
function showSessionDropMenu() {
  sessionMenu.classList.toggle('not-visible')
}

function closeFloatingForm(){
  console.log('closing...')
}