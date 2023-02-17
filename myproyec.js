

let title = "Words of inspiration";

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
    let li6Texto = document.createTextNode("FAMILY");
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





function displayoption() {
 
    let election = option.value;
    let word = document.querySelector('p');
    word.innerHTML = "";
 

    if(election == "1"){
      word.textContent = 'Ether 12:27 And if men come unto me I will show unto them their aweakness. I bgive unto men weakness that they may be humble; and my cgrace is sufficient for all men that dhumble themselves before me; for if they humble themselves before me, and have faith in me, then will I make eweak things become strong unto them.';
    } else if (election == "2") {
      word.textContent = 'Moroni 7:40 And again, my beloved brethren, I would speak unto you concerning ahope. How is it that ye can attain unto faith, save ye shall have hope?';
    } else if (election == "3") {
      word.textContent = '3Nephi 18:21 a Pray in your families unto the Father, always in my name, that your wives and your children may be blessed.';
    } else if (election == "4") {
      word.textContent = 'Alma 32:21 And now as I said concerning faith—afaith is not to have a perfect knowledge of things; therefore if ye have faith ye bhope for things which are cnot seen, which are true.';

    } else {
      word.textContent = 'this not one elecction';
    }

    
  }
// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

document.getElementById("addoption").addEventListener("click", displayoption);


const myUrl = "http://127.0.0.1:5500/data/myproject.json";
const getimages = async () => {
	let inspiration = await jsonFetch(myUrl);


	displaydata(inspiration);
};

async function jsonFetch(myUrl) {
	const response = await fetch(myUrl);
	const data = await response.json();
	console.log(data)
	return data.inspiration;
}

    function displaydata(inspiration) {
      const photo = document.querySelector("#hope");
	    photo.innerHTML = "";
   

	     inspiration.forEach((inspirations) => {
        let portrait = document.createElement("img");
        portrait.classList.add('imgem');
        portrait.setAttribute("src", inspirations.imagen);
        portrait.setAttribute("alt",` images`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "150");
		    portrait.setAttribute("height", "200");

        photo.appendChild(portrait);
       

})};
getimages()