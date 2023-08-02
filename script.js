function calcular(){
    let altura = document.getElementById("altura")
    let peso = document.getElementById("peso")
    let circunferencia = document.getElementById("circunferencia")

    let alt = Number(altura.value)
    let pes = Number(peso.value)
    let cir = Number(circunferencia.value)

    if(alt == 0 || pes == 0 || cir == 0 || isNaN(alt) || isNaN(pes) || isNaN(cir)){
        window.alert("Preencha os campos corretamente!")
    }else{
        let res = cir / (0.109 * Math.sqrt(pes / alt))
        resultado.innerHTML =  `Seu IC é: <strong>${res.toFixed(2)}</strong>`
    }
}