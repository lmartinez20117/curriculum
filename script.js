function canviNom(){
    let nom = prompt("COMO QUIERES LLAMARTE?")
    document.getElementById("nom").innerHTML= "NOM: "+nom;
}
function canvifoto(){
    let foto = prompt("Qué quieres ser?");
    document.getElementById("foto").src = foto
}
function harryPotter(){
    document.getElementById("foto").style ="display:none"
       
}
function canviFons(){
    let body = document.getElementsByTagName("body")[0]
    let foto = prompt("DONDE QUIERES VIAJAR?")
    body.style = "background-image: url('"+foto+"'); background-size: cover;" ;
}
function tradueix(){
    let body = document.getElementsByTagName("body")[0];
    body.style = "font-family: Manrope, sans-serif;"

}
function afegirInfo(){
    let llista = document.getElementById("expL");
    let element = document.createElement("li");
    element.innerHTML = prompt("QUE QUIERES AÑADIR?")
    llista.appendChildId(element)
}
function hacerfotogrande(){
    let foto = document.getElemenyById("foto")
    width= "3000"
}