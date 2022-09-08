const nome = document.getElementById('txtname')
const email = document.getElementById('txtemail')
const tel = document.getElementById('txttelefone')
const msg = document.getElementById('txtmsg')
const botao = document.getElementById('button')
const input = document.querySelectorAll('.input')
const info = document.querySelectorAll('.info')

botao.addEventListener('click', function (enviar) {

    
    enviar.preventDefault()

    erroDeValidacao()

})

nome.addEventListener('blur', function () {

    if (nome.value) {
        nome.classList.add('valido')
        info[0].classList.remove('validacao')
    }
})

email.addEventListener('blur', function () {

    if (email.value) {
        email.classList.add('valido')
        info[1].classList.remove('validacao')
    }
})

tel.addEventListener('blur', function () {

    if (tel.value) {
        tel.classList.add('valido')
        info[2].classList.remove('validacao')
    }
})

msg.addEventListener('blur', function () {

    if (msg.value) {
        msg.classList.add('valido')
        info[3].classList.remove('validacao')
    }
})

function erroDeValidacao(){
    

    if(nome.value === ''){
    nome.classList.add('noFill')
    info[0].classList.add('validacao')
    }

    if(email.value === ''){
    email.classList.add('noFill')
    info[1].classList.add('validacao')
    }

    if(tel.value === ''){
    tel.classList.add('noFill')
    info[2].classList.add('validacao')
    }

    if(msg.value === ''){
    msg.classList.add('noFill')
    info[3].classList.add('validacao')
    }
}