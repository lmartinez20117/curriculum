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
function fotopequeña(){
    document.getElementById("foto").style = "width: 20px;"

}
function canvicolor(){
    let body = document.getElementsByTagName("body")[0]
    let color= prompt("color:  rgba(155, 207, 241, 1); rgba(243, 197, 96, 1);rgba(252, 117, 196, 1);")
    body.style = "background-color:"+color +" !important"
}