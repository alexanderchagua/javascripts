

let title = "Word of inspiration";

document.querySelector("#title").innerHTML= title;


function init() {
 
    let ol = document.createElement("ol");
    let li4 = document.createElement("li");
    let li4Texto = document.createTextNode("Why am I having trouble and what should I do?");
    li4.appendChild(li4Texto);

    let li5 = document.createElement("li");
    let li5Texto = document.createTextNode("HOPE");
    li5.appendChild(li5Texto);
     
    let li6 = document.createElement("li");
    let li6Texto = document.createTextNode("FAMILIA");
    li6.appendChild(li6Texto);

    let li7 = document.createElement("li");
    let li7Texto = document.createTextNode("FAITH");
    li7.appendChild(li7Texto);
    
 
 
    ol.appendChild(li4);
    ol.appendChild(li5);
    ol.appendChild(li6);
    ol.appendChild(li7)
 
    document.body.appendChild(ol);
 
}

init();



     const myUrl = "https://run.mocky.io/v3/3d762227-e669-4bf6-b9d3-bf1df4e82806"
      fetch(myUrl)
      .then((response) => response.json())
      .then((data) => displayData(data));
  
  function displayData(data){
      console.log(data)
    }


let parrafo = document.querySelector('p');
function establecerClima() {
    let eleccion = addend1.value;
  
    if (eleccion === "1") {
      parrafo.textContent = 'El día esta agradable y soleado hoy. ¡Use pantalones cortos! Ve a la playa o al parque y come un helado.';
    } else if (eleccion === "2") {
      parrafo.textContent = 'Está lloviendo, tome un abrigo para lluvia y un paraguas, y no se quede por fuera mucho tiempo.';
    } else if (eleccion === "3") {
      parrafo.textContent = 'Está nevando ─ ¡está congelando! Lo mejor es quedarse en casa con una taza caliente de chocolate, o hacer un muñeco de nieve.';
    } else if (eleccion === "4") {
      parrafo.textContent = 'No está lloviendo, pero el cielo está gris y nublado; podría llover en cualquier momento, así que lleve un saco solo por si acaso.';
    } else {
      parrafo.textContent = 'this not one elecction';
    }
  }
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById("addNumbers").addEventListener("click",establecerClima);