/**
 * Con arrow funtions construir las siguientes funciones:
 a. Convierta segundos a minutos e imprima el mensaje:
“Los segundos segundos son equivalentes a minutos minutos”
b. Convierta minutos a horas e imprima el mensaje:
“Los minutos minutos son equivalentes a horas horas”
c. Convierta horas en días e imprima el mensaje:
“Las horas horas son equivalentes a días días”
 * 
 */

// Convierta segundos a minutos

function convertirSegundosAMinutos(segundos) {
    let minutos = Math.floor(segundos / 60);
    let segundosRestantes = segundos % 60;
    if (segundosRestantes < 10) {
        segundosRestantes = "0" + segundosRestantes;
    }
    return minutos + ":" + segundosRestantes;
}

/** Con arrow funtions podremos realizarlo de esta forma */

const convertirSegundosAMinutos = function(segundos) {
    const minutos = segundos / 60;
    console.log('los ${segundos} segundos son iguales a ${minutos} minutos');
}

convertirSegundosAMinutos(135);

// Convierta minutos a horas

function convertirMinutosAHoras(minutos) {
    let horas = Math.floor(minutos / 60);
    let minutosRestantes = minutos % 60;
    if (minutosRestantes < 10) {
        minutosRestantes = "0" + minutosRestantes;
    }
    return horas + ":" + minutosRestantes;
}

/** con arrow funtions se puede realizar de esta forma */

const convertirMinutosAHoras = function(minutos) {
    const horas = minutos / 60;
    console.log('los ${minutos} minutos son iguales a ${horas} horas');
}

convertirMinutosAHoras(135);

// Convierta horas en días

function convertirHorasEnDias(horas) {
    let dias = Math.floor(horas / 24);
    let horasRestantes = horas % 24;
    if (horasRestantes < 10) {
        horasRestantes = "0" + horasRestantes;
    }
    return dias + ":" + horasRestantes;
}

/** Con arrow funtions se puede realizar de esta forma */

const convertirHorasEnDias = function(horas) {
    const dias = horas / 24;
    console.log('los ${horas} horas son iguales a ${dias} días');
}

convertirHorasEnDias(135);