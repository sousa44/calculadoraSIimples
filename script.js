

// elementos DOM
const calculadoraButtons = document.querySelectorAll(
    '#calculadora .calculadora__btn'
);

const inputResult = document.getElementById("inputResult");

let numero1 = "";
let numero2 = "";
let operador = "";



const mostrarDados = (dado) => {

    // Numeros

    switch (dado) {

        // NÚMEROS
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":

            if (operador === "") {
                numero1 += dado
            } else {
                numero2 += dado;
            }

            inputResult.value += dado;

            break


        // operadores 
        case "+":
        case "-":
        case "x":
        case "/":
        case "%":

            operador = dado;
            inputResult.value += dado;

            break;


        // IGUAL

        case "=":
            let n1 = Number(numero1);
            let n2 = Number(numero2);
            let calculo;


            switch (operador) {

                case "+":
                    calculo = n1 + n2;
                    break;

                case "-":
                    calculo = n1 - n2;
                    break;

                case "x":
                    calculo = n1 * n2;
                    break;

                case "/":
                    calculo = n1 / n2;
                    break;

                
            }

            inputResult.value = calculo;


            // prepara para uma nova conta
            numero1 = calculo;
            numero2 = "";
            operador = "";

            break;


        // LIMPAR
        case "limpar":

            numero1 = "";
            numero2 = "";
            operador = "";
            inputResult.value = "";

            break;

    }


};


calculadoraButtons.forEach((btn) => {

    btn.addEventListener("click", () => {

        mostrarDados(btn.getAttribute("value"));

    });

});