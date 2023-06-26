var img1 = document.querySelector('.img1')
var img2 = document.getElementsByClassName('img2')[0]
var img3 = document.querySelector('.img3')
var resultado = document.querySelector('.container-one')

let hora = new Date().getHours()
let minutos = new Date().getMinutes()

resultado.innerHTML = `<p>Agora são ${hora} horas e ${minutos} minutos.</p>`

if (hora < 12) {
    img2.style.display = 'none'
    img3.style.display = 'none'
    document.body.style.backgroundColor = '#e2cd9f';
} else if (hora < 18) {
    img1.style.display = 'none'
    img3.style.display = 'none'
    document.body.style.backgroundColor = '#b9846f';
} else if (hora <= 24) {
    img1.style.display = 'none'
    img2.style.display = 'none'
    document.body.style.backgroundColor = '#515154';
} else {
    alert("Erro, seu sistema está com o horário errado!")
    document.body.style.backgroundColor = '#000';
    img1.style.display = 'none'
    img2.style.display = 'none'
    img3.style.display = 'none'
    resultado.style.display = 'none'
}