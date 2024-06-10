function calculoINSS(salarioBruto){
    let desconto = salarioBruto;
    if (salarioBruto <= 1412.00)
        desconto *= 0.925;
    else if (salarioBruto <= 2666.68)
        desconto *= 0.91;
    else if (salarioBruto <= 4000.03)
        desconto *= 0.88;
    else
        desconto *= 0.86;
    return desconto.toFixed(2); // Arredonda para duas casas decimais
}

function calculoDependentes(){
    let dependentes = parseFloat(document.getElementById("DE").value);
    let descontoDependente = 189.59 * dependentes;
    return descontoDependente.toFixed(2); // Arredonda para duas casas decimais
}

function calculoIR(salarioBruto){
    let ir = 0;
    if(salarioBruto <= 2259.2)
        ir = 0;
    else if(salarioBruto <= 2826.65)
        ir = 169.44;
    else if(salarioBruto <= 3751.05)
        ir = 381.44;
    else if(salarioBruto <= 4664.68)
        ir = 662.77;
    else
        ir = 896;
    return ir.toFixed(2); // Arredonda para duas casas decimais
}

function calculate(){
    let salarioBruto = parseFloat(document.getElementById("SB").value);
    let INSS1 = calculoINSS(salarioBruto);
    let INSS = salarioBruto - INSS1;
    let dep = calculoDependentes();
    let IR = calculoIR(salarioBruto);
    let displayINSS = document.getElementById("INSS");
    let displayIR = document.getElementById("IR");
    let displaySL = document.getElementById("SL");
    let res;
    if(dep > IR){
        res = 0;
    }else{
        res = IR - dep;
    }
    let SL = INSS1 - res;
    displayINSS.value = "R$ " + INSS;
    displayIR.value = "R$ " + IR;
    displaySL.value = "R$ " + SL.toFixed(2);
}
