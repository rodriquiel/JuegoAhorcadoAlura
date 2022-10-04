
//Variables globales
let palabras = ["CAMION","JAMON","ANTENA","ENANO","MIOPE","KOALA","PERRO","TECNICO","USADO","LIMADURA","PELUCA","MARIPOSA","PANTALLA","TECLADO","MUSCULO","CORAZON","EXITO","PIEZA"];
let tablero = document.getElementById("horca").getContext("2d");
let palabraSecreta = "";
let letras = []; 
let errores = 6;
let letrasCorrectas = 0;
let letrasIngresadas = []



//Palabra secreta
function elijePsecreta(){
    let palabra = palabras[Math.floor(Math.random()*palabras.length)];
    palabraSecreta = palabra;
}

function comprobarLetra(key){
    let estado = false;
    if(key >= 65 && letras.indexOf(key) || key<=90 && letras.indexOf(key) ){
        letras.push(key);
        console.log(key);
        return estado        
    }
    else{
        estado=true;
        console.log(key);
        return estado;
    }
}

function verificarLetra(keyCode) {
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
  }



function anadirLetraIncorrecta(){
    errores = errores-1; //errores -= 1
}


function verificarVencedor(letra) {
    letraElegida.push(letra.toUpperCase());
    if (letraElegida.length == palabraSecreta.length) {
      victoria() 
    }  
  }


  function guardarPalabra() {
  
    let nuevaPalabra = document.getElementById('inputNuevaPalabra').value;
  
    if(nuevaPalabra !== ""){
      palabras.push(nuevaPalabra.toUpperCase());
      document.getElementById("agregar-palabra").style.display = "none";
      console.log(palabras[5])
      iniciarJuego();
    }  
}

//Inicia juego
function iniciarJuego(){
    document.getElementById("comenzar").style.display="none";

    const img = new Image()
    img.src = "./fondo.jpg"
    img.onload = () => {
        

    
        elijePsecreta();
        dibujarCanvas();
        tablero.drawImage(img, 0, 0)
        dibujarLinea();

        document.onkeydown = (e) => {
            let letra = e.key.toUpperCase();
            if (!letrasIngresadas.includes(letra) && verificarLetra(e.keyCode)){
                letrasIngresadas.push(letra);
                if(comprobarLetra(letra) && palabraSecreta.includes(letra)){
                    for(let i=0; i<palabraSecreta.length; i++){
                        if(palabraSecreta[i] === letra){
                            escribirLetraCorrecta(i);
                            letrasCorrectas = letrasCorrectas+1;
                            if (letrasCorrectas === palabraSecreta.length){
                                victoria();
                            }
                        }
                    }
                }else{
                    if (errores>0 && letra>='A' && letra<='Z'){
                        anadirLetraIncorrecta();
                        escribirLetraIncorrecta(letra,errores);
                        dibujarAhorcado(errores)
                    }else{
                        derrota();
                    }
                }
            }
        }
    }
}

