let img = document.getElementById("img-muñeco");
let botonEncr = document.getElementById("botonEncr");
let botonDes = document.getElementById("botonDes");
let msj = document.getElementById("msj");
let advert1 = document.getElementById("advert_1");
let advert2 = document.getElementById("advert_2");
let out = document.getElementById("out");
let box = document.getElementById("box");
let copy = document.getElementById("copyTexto")
let exp = new RegExp(/([A-Z])/g)




function fondoIMG(src){
    img.setAttribute("src", src);
    advert1.innerHTML = "Ningún msj fue encontrado"
    advert2.innerHTML ="Ingresa el texto que desees encriptar o desencriptar"
    copy.hidden = true
  
}

function encriptar() {
    let auxiliar = ""
    let encriptado = ""
    
    if (msj.value != "" && msj.value != " ") {
        
        img.setAttribute("src", "")
        advert1.innerHTML = ""
        advert2.innerHTML = ""
        copy.hidden = false

        for(let index = 0; index < msj.value.length; index++){
            auxiliar = msj.value.charAt(index);
            
            if (auxiliar === "a") {
                auxiliar = "ai"
            }if (auxiliar === "e") {
                auxiliar = "enter"
            }if (auxiliar == "i") {
                auxiliar = "imes";
            }if (auxiliar == "o") {
                auxiliar ="ober"
            }if (auxiliar == "u") {
                auxiliar = "ufat"
            }if(exp.test(auxiliar)){
                alert("Solo debe ingresar letras minusculas")
                encriptado = ""
                fondoIMG("assets/Muñeco.png");

                break
            }
    
            
            encriptado += auxiliar
            
        }
    }else{
        alert("Ingrese un msj por favor")
        fondoIMG("assets/Muñeco.png");
        out.innerHTML = ""
    }
    
    out.innerHTML = encriptado
    
    
}

function desencriptar() {
    
    if (exp.test(msj.value)) {
        alert("Ingrese un msj por favor")
        fondoIMG("assets/Muñeco.png");
        
        
    }else{
        
        if (msj.value != "" && msj.value !=" ") {
            img.setAttribute("src", "")
            advert1.innerHTML = ""
            advert2.innerHTML = ""
            let a = msj.value;
            let auxiliar = a.replaceAll("ai","a");
            a = auxiliar;
    
            auxiliar = a.replaceAll("enter", "e");
            a = auxiliar
    
            auxiliar = a.replaceAll("imes", "i");
            a = auxiliar
    
            auxiliar = a.replaceAll("ober", "o");
            a = auxiliar
    
            auxiliar = a.replaceAll("ufat", "u");
    
            out.innerHTML = auxiliar
    
        }else{
            alert("Ingrese un msj por favor")
            fondoIMG("assets/Muñeco.png");
            out.innerHTML = ""
        }
    }



}



async function copyTexto() {
    
  
   
    var texto = out.value;

    await navigator.clipboard.writeText(texto);
  }
  

botonEncr.onclick = encriptar
botonDes.onclick = desencriptar
copy.onclick = copyTexto

fondoIMG("assets/Muñeco.png");

