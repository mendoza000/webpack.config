import "../css/defCreateElement.css";


export const createH1 = (nombre) =>{
	console.log("Creando elemento...");
	const h1 = document.createElement('h1');
	h1.innerText = `Hola ${nombre}`
	h1.className += "title"
	h1.className += " border"

	document.body.append(h1)
}