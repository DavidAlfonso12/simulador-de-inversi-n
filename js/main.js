function inversion(){
    // 1. Ocultar la imagen y mostrar el panel con los datos de la simulacion
    const preCont = document.querySelector('.pre-simulation');
    const postCont = document.querySelector('.post-simulation');

    postCont.classList.remove('disabled');
    preCont.classList.add('disabled');

    // 2. Capturar y mostrar los datos que no se calculan
    const nombres = document.getElementById('nombres').value;
    const email = document.getElementById('email').value;

    const mostrarNombre = document.getElementById('nombres-show');
    const mostrarEmail = document.getElementById('email-show');

    mostrarNombre.innerText = nombres;
    mostrarEmail.innerText = email;

    // 3. Capturamos los datos de invercion y tiempo, creamos las variables de ganancia y ganaciaTotal

    const tiempo = document.getElementById('tiempo').value;
    const tiempoShow = document.getElementById('tiempo-show');
    const invertir = document.getElementById('inversion').value;
    const invertirShow = document.getElementById('interes-show');

    const gananciaShow = document.getElementById('ganancia-show');
    const gTotalShow = document.getElementById('total-show');


    let ganancia = 0;
    let gananciaTotal = 0;

    // 4. validamos o comparamos el tiempo de inversion, segun este
    // mostramos la ganancia, el total y los demas datos

    switch (tiempo) {
        case "1":
                ganancia = (invertir * 0.008)*12;
                gananciaTotal = parseInt(invertir) + ganancia;
                tiempoShow.innerText = "12 MESES";
                invertirShow.innerText = "0.8%";
            break;
        case "2":
            ganancia = (invertir * 0.013)*24;
            gananciaTotal = parseInt(invertir) + ganancia;
            tiempoShow.innerText = "24 MESES";
            invertirShow.innerText = "1.3%";
            break;

        case "3":
            ganancia = (invertir * 0.017)*36;
            gananciaTotal = parseInt(invertir) + ganancia;
            tiempoShow.innerText = "36 MESES";
            invertirShow.innerText = "1.7%";
            break;
    }
    
    gananciaShow.innerText = ganancia;
    gTotalShow.innerText = gananciaTotal;
    
}