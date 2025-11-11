//----------------EVENTOS-----------------------------------.
const cielito = document.getElementById("cielito");


//--------------- 1 click
const btnEstrella = document.getElementById("btnEstrella");
btnEstrella.addEventListener("click", ()=> {
    cielito.innerHTML += "⭐";
})


//---------------2 click 
const btnPlaneta = document.getElementById("btnPlaneta");
btnPlaneta.addEventListener("dblclick", ()=>{
    cielito.innerHTML += "🪐";
})


//---------------emoji
const inputEmoji = document.getElementById("inputEmoji");
const btnAgregarEmoji = document.getElementById("btnAgregarEmoji");

btnAgregarEmoji.addEventListener("click", ()=>{
    var emoji = inputEmoji.value.trim();
    if(emoji) cielito.innerHTML += emoji;
    inputEmoji.value = "";
})

inputEmoji.addEventListener("keydown", e =>{
    if(e.key==="Escape") cielito.innerHTML="";
})