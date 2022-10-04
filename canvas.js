


function dibujarCanvas(){


    tablero.lineWidth = 8; //largo linea
    tablero.lineCap = "round"; //acabado linea
    tablero.lineJoin = "round";

    tablero.fillStyle = "#F3F5F6"; //color fondo
    tablero.strokeStyle = "#F3F5F6"; //color linea
    
    tablero.fillRect(0,0,840,800); //ancho y largo tablero
    tablero.beginPath(); //inicia diseño
    tablero.moveTo(340,300); //se mueve a una pos especifica
    tablero.lineTo(500,300); //dibuja linea base horca
    tablero.moveTo(420,300);
    tablero.lineTo(420,10);  //dibuja poste horca
    tablero.moveTo(420,30);
    tablero.lineTo(440,10);
    tablero.moveTo(420,10);
    tablero.lineTo(530,10);
    tablero.moveTo(530,10);
    tablero.lineTo(530,40);


    tablero.stroke();
    tablero.closePath(); //cierra diseño


}

function dibujarLinea(){
    tablero.lineWidth = 6;  //largo linea
    tablero.lineCap = "round"; //acabado linea
    tablero.lineJoin = "round"; 
    tablero.fillStyle = "#F3F5F6"; //color fondo
    tablero.strokeStyle = "#F3F5F6"; //color linea

    let anchura = 600/palabraSecreta.length;  //espacio reservado para guiones
    
    for(let i=0; i<palabraSecreta.length; i++){
        tablero.moveTo(145+(anchura*i),510);
        tablero.lineTo(195+(anchura*i),510);    
    }

    tablero.stroke();
    tablero.closePath(); //cierra diseño

}

function escribirLetraCorrecta(index){
    tablero.font = 'bold 52px Montserrat';
    tablero.lineWidth = 6;
    tablero.lineCap = "round"; //acabado linea
    tablero.lineJoin = "round";
    tablero.fillStyle = "#272325";
    
    let anchura = 600/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 150+(anchura*index), 500, 52);
    //tablero.stroke();
}

function escribirLetraIncorrecta(letra,errorsLeft){
    tablero.font = 'bold 40px Montserrat';
    tablero.lineWidth = 6;
    tablero.lineCap = "round"; //acabado linea
    tablero.lineJoin = "round";
    tablero.fillStyle = "#272325";
    
    tablero.fillText(letra, 105+(40*(10-errorsLeft)),400,40) //40 en referencia a tamaño fuente

}

function dibujarAhorcado(puntaje) {
    tablero.lineWidth=8
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#272325"

    if(puntaje===5){//dibuja cabeza
        tablero.moveTo(550,60);
        tablero.arc(530,60,20,0,Math.PI*2);
    }
    if(puntaje===4){//dibuja cuerpo
        tablero.moveTo(530,80);
        tablero.lineTo(530,200);
    }
    if(puntaje===3){//dibuja pierna izquierda
        tablero.moveTo(530,200);
        tablero.lineTo(560,250);
    }
    if(puntaje===2){//dibuja pierna derecha
        tablero.moveTo(530,200);
        tablero.lineTo(500,250);
    }
    if(puntaje===1){//dibuja brazo izquierdo
        tablero.moveTo(530,100);
        tablero.lineTo(560,150);
    }
    if(puntaje===0){//dibuja brazo derecho
        tablero.moveTo(530,100);
        tablero.lineTo(500,150);
        derrota();
    }
    tablero.stroke()
    tablero.closePath()
  }

  function derrota() {
    tablero.font = ' bold 40px Montserrat';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#272325"
    tablero.fillText("Has perdido!",320,600);
    setTimeout( recargar , 2000)
  }

  function victoria() {
    tablero.font = 'bold 40px Montserrat';
    tablero.lineWidth=6
    tablero.lineCap="round"
    tablero.lineJoin="round"
    tablero.fillStyle="#272325"
    tablero.fillText("Has ganado",320,600)
    tablero.fillText("Felicidades!",320,640)
    setTimeout( recargar , 2000)
  }   

  function recargar(){
    location.reload(); 
  }


