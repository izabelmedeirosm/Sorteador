const sortearButton = document.querySelector(".buttom-sortear")
const numSorteadoInput = document.querySelector(".num-result");


function generateNumber() {
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    
    if (min >= max) {
        alert("O valor mínimo tem que ser MENOR que que o valor máximo")
    } else {
        const numSorteado = Math.floor(Math.random() * (max - min + 1)) + min;

        numSorteadoInput.value = numSorteado;
    }



}

sortearButton.addEventListener("click", generateNumber)


