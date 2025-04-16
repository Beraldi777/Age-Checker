function verificar() {
var data = new Date();
var ano = data.getFullYear();
var nas = document.getElementById("datanas");
var img = document.getElementById("imagem");
var res = document.getElementById("mensagem");
if (nas.value.length == 0 || nas.value > ano) {
    alert("[ERRO] Verifique os dados e tente novamente!")
} else if (nas.value < 1900) {
    alert("[ERRO] O ano de nascimento não pode ser menor do que 1900!")
} else {
    var sex = document.getElementsByName("radsex");
    var idade = ano - nas.value;
    var genero = ""
    if (sex[0].checked) {
        genero = "Homem"
        if (idade >= 0 && idade <= 12) {
        img.src = "assets/img/bebe-m.jpg"
        } else if (idade >= 13 && idade <= 17) {
        img.src = "assets/img/jovem-m.jpg"
        } else if (idade >= 18 && idade <= 59) {
        img.src = "assets/img/adulto-m.jpg"
        } else if (idade >= 60) {
        img.src = "assets/img/idoso-m.jpg"
        }

    } else {
        genero = "Mulher"
        if (idade >= 0 && idade <= 12) {
            img.src = "assets/img/bebe-f.jpg"
            } else if (idade >= 13 && idade <= 17) {
            img.src = "assets/img/jovem-f.jpg"
            } else if (idade >= 18 && idade <= 59) {
            img.src = "assets/img/adulta-f.jpg"
            } else if (idade >= 60) {
            img.src = "assets/img/idosa-f.jpg"
            }
    }
    res.innerHTML = `Encontramos ${genero} com ${idade} anos!!`;
    }
}