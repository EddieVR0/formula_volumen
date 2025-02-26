window.onload = () => {
let form = document.getElementById('form');

form.onsubmit= (e) => {
    e.preventDefault();

let base = parseFloat(document.getElementById('base').value);
let altura = parseFloat(document.getElementById('altura').value);

if (isNaN(base) || isNaN(altura) || base <= 0 || altura <= 0) {
    alert("Por favor, ingrese valores válidos para la base y la altura.");
    return;
}

let  volumenCilindro = () =>{
   let area = base * base
    let  pi = 3.1416 
    const resultado = pi * area * altura;
  
    return `Base:(${base}), altura:(${altura}), Resultado: ${resultado.toFixed(2)} cm3 `
};

let resultado = volumenCilindro();

document.getElementById('base').value = "";
document.getElementById('altura').value = "";

let resultadoDiv = document.createElement('div');
resultadoDiv.className = 'resultado';
resultadoDiv.innerHTML = resultado;


resultadoDiv.addEventListener("click", function() {
    this.remove(); 
});


document.getElementById('mostrarResultado').appendChild(resultadoDiv);
}
}
