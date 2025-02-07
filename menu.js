let btnMenu = document.getElementById("btnMenu")
let menu = document.getElementById("menuMobile")
let overlay = document.getElementById("overlayMenu")
let form = document.getElementById("form")
let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let phoneInput = document.getElementById("phone")
let messageArea = document.getElementById("message")

btnMenu.addEventListener('click', ()=>{
    menu.classList.add('openMenu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('openMenu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('openMenu')
})

form.addEventListener("submit", (Event) =>{
    Event.preventDefault()
    // verificar se o nome ta vázio
    if(nameInput.value === ""){
       alertUser("Por favor preencha seu nome.")
        return
    }
    //validação email
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
       alertUser("Por favor preencha seu email corretamente.")
        return
    }

    //validação telefone
    if(phoneInput.value === ""){
       alertUser("Preencha seu número de telefone corretamente, não se esquça do +DDD!")
        return
    }

    //validação mensagem
    if(messageArea.value === ""){
       alertUser("Ops! Você esqueceu a sua mensagem.")
       return
    } 

    //envio de todos os campos
    form.submit()
})

function isEmailValid(email){
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,}$/
    )

    if(emailRegex.test(email)){
        return true
    }

    return false
}

function alertUser(messageAlert){
    swal({
        text: messageAlert,
        icon: "warning",
        button: "Ok, vamos lá.",
      });
}
