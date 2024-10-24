function mostrarResultado1(opcion) {
    let resultado = '';

    switch (opcion) {
        case 'Opción 1':
            resultado = 'Has seleccionado la Opción 1. Esta opción muestra información general sobre el tema que estás explorando.';
            break;
        case 'Opción 2':
            resultado = 'Has seleccionado la Opción 2. Aquí se presentan detalles más específicos sobre el segundo tema.';
            break;
        case 'Opción 3':
            resultado = 'Has seleccionado la Opción 3. Esta opción proporciona una visión amplia de los puntos clave del tema.';
            break;
    }

    document.getElementById('resultado1').innerText = resultado;
}

function mostrarResultado2(opcion) {
    let resultado = '';

    switch (opcion) {
        case 'Opción A':
            resultado = 'Has seleccionado la Opción A. Aquí encontrarás un análisis profundo del primer tema relacionado.';
            break;
        case 'Opción B':
            resultado = 'Has seleccionado la Opción B. Esta opción te ofrecerá comparaciones entre varios conceptos importantes.';
            break;
        case 'Opción C':
            resultado = 'Has seleccionado la Opción C. En esta sección, se discuten las implicaciones prácticas del tema en cuestión.';
            break;
    }

    document.getElementById('resultado2').innerText = resultado;
}

