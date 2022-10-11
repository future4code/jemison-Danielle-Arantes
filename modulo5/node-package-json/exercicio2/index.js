//EXERCICIO 2

const num1 = Number(process.argv[2])
const num2 = Number(process.argv[3])
const operacao = process.argv[4]

if (process.argv.length < 5)
{
    console.log(`Esperava 3 parametros, recebi ${process.argv.length - 2}`)
}
else 
{
    switch (operacao){
        case "add":
            return console.log(`Resultado: ${num1 + num2}`)
            break;
        case "sub":
            return console.log(`Resultado: ${num1 - num2}`)
            break;
        case "mult":
            return console.log(`Resultado: ${num1 * num2}`)
            break;
        case "div":
            return console.log(`Resultado: ${num1 / num2}`)
            break;

    }

}
//FIM EXERCICIO 2