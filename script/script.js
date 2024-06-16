function enviar() {
    let ValorInicial = parseInt(document.getElementById("valor-inicial").value);
    let ValorFinal = parseInt(document.getElementById("valor-final").value);
    let IntervaloEntreValores = parseInt(document.getElementById("interv-entre-valor").value);
    let DivResultado = document.getElementById("div2");
    if (ValorInicial === "" || isNaN(ValorInicial)) {
        alert("Por favor, insira algum número no campo de valor inicial.");
        return false; 
    }
    if (!ValorFinal || !IntervaloEntreValores || ValorFinal == 0 || IntervaloEntreValores == 0) {
        window.alert("Alguns dos Campos não foram preenchidos corretamente");
    } else if( ValorFinal < ValorInicial) {
        let resultado = document.createElement("p");
        resultado.id = "resultado";
        DivResultado.appendChild(resultado);
        for (let j = ValorInicial; j >= ValorFinal; j -= IntervaloEntreValores) {
            console.log(j);
            resultado.innerText += `${j}➡️`;
        }
        resultado.innerText += `🔚`;
    }else {
        let resultado = document.createElement("p");
        resultado.id = "resultado";
        DivResultado.appendChild(resultado);
        for (let i = ValorInicial; i <= ValorFinal; i += IntervaloEntreValores) {
            console.log(i);
            resultado.innerText += `${i}➡️`;
        }
        resultado.innerText += `🔚`;
    }
}
function excluir() {
    const div2 = document.getElementById("div2")
    let resultado = document.getElementById("resultado")
    div2.removeChild(resultado)
}
