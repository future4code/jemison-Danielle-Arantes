//EXERCICIO 1

//passar parametros pelo terminal se usa o process.argv

const nome = process.argv[2]
const idade = Number(process.argv[3])

if (process.argv.length < 4)
{
    console.log(`Esperava 2 parametros, recebi ${process.argv.length - 2}`)
}
else
{
    console.log(`Olá ${nome} você tem ${idade} anos.`)
    console.log(`Olá ${nome} você tem ${idade} anos. Em 7 anos terá ${idade + 7} anos`)
}

//FIM EXERCICIO 1

