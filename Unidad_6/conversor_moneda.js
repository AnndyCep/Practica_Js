Pesos = 50000
dolar = 30

function conversor_PesosDolar(pes){
    let conversion = (pes/4424)
    return conversion
}

function conversor_dolarPes(dolar){
    let conversionn = (dolar/0.00023)
    return conversionn
}

let conversionDolar = conversor_PesosDolar(Pesos)
console.log(` La conversion a dolar es ${conversionDolar}`)

let conversionPeso = conversor_dolarPes(dolar)
console.log(` La conversion a pesos es ${conversionPeso}`)