let btnMenu = document.getElementById("btnMenu")
let menu = document.getElementById("menuMobile")
let overlay = document.getElementById("overlayMenu")

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('openMenu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('openMenu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('openMenu')
})