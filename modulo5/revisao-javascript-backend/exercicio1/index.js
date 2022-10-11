console.log("exercicio 1");

const converteCelsius = (graus, unidade) => {

    if((typeof graus) === "number")
    {
        if((unidade === "F"))
        {
            console.log(`Tendo ${graus}${unidade} o valor convertido para Celsius é ${(graus - 273.15)}C`)
        }
        else if(unidade === "K")
        {
            console.log(`Tendo ${graus}${unidade} o valor convertido para Celsius é ${((graus - 32)/1.8)}C`)
        }
        else{
            console.log("Erro. Parâmetro de unidade de medida inválido")
        }
    }
    else{
        console.log("Erro. Parâmetro de graus inválido")
    }

}

converteCelsius(30, "F");
converteCelsius("trinta", "F");
converteCelsius(30, "G");
converteCelsius(30, "K");
converteCelsius(30, "k");

