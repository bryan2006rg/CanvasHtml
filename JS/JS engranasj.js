window.onload = function () {

    // let indica una variable a nivel de bloque { }
    // llamado al componente html 
    let canvas = document.getElementById("theLostCanvas");
    if (canvas //si el objeto existe
        && //and ambas partes debe ser verdaderas 
        //|| or solamente una debe ser verdadera
        // ! not !true
        canvas.getContext) {
        let ctx = canvas.getContext("2d"); //definimos los ejes x,y
        if (ctx) {
            //entro de canvas
            let centroX = canvas.width / 2;
            let centroY = canvas.height / 2;

            //definimos el radio
            let radioExterno = 95;// radio de las puas
            let radioInterno = 50; // radio del circulo
            let radioMedio = radioInterno * 1.6;
            let radioCentro = 20;

            // numero de putnos del engranaje
            let numeroPuntos = 40;

            //configuramos las lineas
            ctx.beginPath(); // nos indica el inicio de la linea
            ctx.lineJoin = "bevel";
            //al unir las lineas se utiliza un acabado redondo

            for (
                let i = 0;// indica al copliador que salte de linea
                // se llama i por convencion
                i < numeroPuntos;
                // condicion logica true o false
                i++
                //al valor de i se le suma 1
                //variable =+ variable = variable+variable
                // i -- resta el valor en 1
            ) {
                if (
                    i % 2 == 0
                    // i que es el marcapasos de for
                    // % el residuo de i divido en 2
                    // == igual
                    // != diferente

                ) {
                    //si el valor es par 
                    radio = radioExterno;

                } else {
                    //si no es par
                    radio = radioInterno;
                }
                // creo el segmento del angulo que se movera
                //al pintar la linea
                let angulo = Math.PI * 2 / numeroPuntos * (i + 1);

                //calculamos las coordenadas externas.
                let x = (radio * Math.sin(angulo)) + centroX;
                let y = (radio * Math.cos(angulo)) + centroY;

                if (i == 0) {
                    ctx.moveTo(x, y); //inicio linea
                } else {
                    ctx.lineTo(x, y);// linea complementaria

                }
            }
            //configuracion de visual de las linea
            ctx.closePath();//cerramos la figura en el punto indicado
            //por defecto es el inicio (moveTo())
            ctx.lineWidth = 5; // ancho de la linea
            ctx.strokeStyle = "orange" // define el color externo de la linea
            ctx.fillStyle = "red"; // define el color de relleno
            ctx.stroke(); // pintamos la linea
            ctx.fill();

        }
    }
}
