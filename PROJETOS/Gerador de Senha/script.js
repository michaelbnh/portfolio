
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");

let sizePassword = document.querySelector("#valor")
let password = document.querySelector("#password");

let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@";
let novasenha = "";

let pass = "";


sliderElement.addEventListener("change",() => {
    let valor = document.querySelector(".size")
    console.log(sliderElement.value);
    console.log(valor);
    valor.textContent = sliderElement.value
})


// slider.oninput = function(){
//     sizePassword.innerHTML = this.value;
// }
function copy () {
   navigator.clipboard.writeText(pass)
   alert("Senha copiada com sucesso!")
}

function generatePassword(){
    console.log(sizePassword);
    password.textContent = "Gerando Senha ..."
  


    for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setTimeout (() => {
        password.textContent = pass
        console.log(pass);
    },1000) 
   
}