//lenguaje interpretado, se lee de arriba hacia abajo

//declarar de nuevo
var x1 = 100;
var x1 = 1000;

//reasignar valor 
let x2 = 10;
x2 = 100;

//ningún cambio
const x3 = 125;
//x3 = 120;

console.log(x1);
console.log(x2);
console.log(x3);

// --------Iteraciones-----------
const cielo= document.getElementById("cielo");

//------FOR------------
for(let i=0; i<5; i++){
    cielo.innerHTML += "⭐";
}

const planetas = ["🌍", "🪐", "🌕"]

//arreglo plural, en el for singular
for(const planeta of planetas){
    cielo.innerHTML += planeta;
}

//------WHILE------------
let m=0;
while(m<5){
    cielo.innerHTML += "☁️";
    m++;
}

let n=0;
do{
    cielo.innerHTML += "🚀";
    n++;
}while(n<4);

const btnStar = document.getElementById("botonStar")
btnStar.addEventListener("click", ()=>{
    cielo.innerHTML += "🪐";
});