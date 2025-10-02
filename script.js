function canviNom(){
    let nom = prompt("COMO QUIERES LLAMARTE?")
    document.getElementById("nom").innerHTML= "NOM: "+nom;
}
function canvifoto(){
    let foto = prompt("Qué quieres ser?");
    document.getElementById("foto").src = foto
}
function harryPotter(){
    if(document.getElementeryById("foto").hidden == true){
        document.getElementeryById("foto").hidden = false
    }else{
        document.getElementeryById("foto").hidden = true
    }
}