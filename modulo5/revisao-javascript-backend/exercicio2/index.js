console.log("exercício 2");

let listaClientes = [
	{id: 1, nome: "Fulano"},
	{id: 2, nome: "Ciclano"},
	{id: 3, nome: "Beltrano"},
	{id: 4, nome: "Fulana"}
]

const cadastraCliente = (novoCliente) => {
    listaClientes.push(novoCliente);
    console.log(listaClientes)
}

cadastraCliente({ id: 5, nome: "Outro ai" })
cadastraCliente({ id: 1, nome: "Ciclana" })

