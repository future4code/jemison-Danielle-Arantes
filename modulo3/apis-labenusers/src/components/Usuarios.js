import axios from "axios";
import React, { useEffect, useState } from "react";
import { ButtonAdd, ButtonDelete, Display, Form, ListaUsuario } from "../styled";

function Usuarios() {
    // PASSO 1: CRIAR OS ESTADOS DA PLAYLIS
    const [user, setUser] = useState([]);
    // PASSO 8: CRIAÇÃO DO ESTADO DO INPUT
    const [inputNome, setInputNome] = useState("");
    const [inputEmail, setInputEmail] = useState("");

    // PASSO 9: CRIAÇÃO DO HANDLE PARA CUIDAR DO INPUT
    const handleInputNome = (e) => {
        setInputNome(e.target.value)
    }
    const handleInputEmail = (e) => {
        setInputEmail(e.target.value)
    }

    // PASSO 2: COMPONENTIZAR OS ITENS DA LISTA
    const allUsers = user.map((user, index) => {
        return (
            <ListaUsuario key={index}>
                {user.name}
            </ListaUsuario>
        )
    })
    
    // PASSO 5: PASSAR O USEEFFECT COM A REQUISIÇÃO GET
        // PARA RENDERIZAR NA TELA AUTOMATICAMENTE
    useEffect(() => {
        getAllUsers()
    }, [])


    // PASSO 3: CRIAÇÃO DAS VARIÁVEIS DA MINHA API
        // QUE ESTARÃO PRESENTES EM TODAS AS REQUISIÇÕES
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users'
    const serviceHeaders = {
        headers: {
            Authorization: 'danille-arantes-jemison'
        }
    }

    // PASSO 4: CRIAÇÃO DA REQUISIÇÃO GET
    const getAllUsers = () => {
        axios.get(url, serviceHeaders)
        .then((response) => { setUser(response.data) })
        .catch((error) => { console.log(error.response) })
    }

    // // PASSO 10: CRIAÇÃO DA REQUISIÇÃO POST
    const body = {
        "name": inputNome,
        "email": inputEmail
    }

    const createUser = (e) => {
        e.preventDefault();

        axios.post(url, body, serviceHeaders)
        .then((response) => {
            alert("Usuário cadastrado!")
            getAllUsers()
        }).catch((error) => {
            alert("Tente novamente :")
        })

        setInputNome("")
        setInputEmail("")
    }

    // // PASSO 11: CRIAÇÃO DA REQUISIÇÃO DELETE
    const deleteUser = (e) => {
        e.preventDefault();

        const delUser = user.filter((user) => user.name === inputNome)

        axios.delete(url + "/" + delUser[0].id, serviceHeaders)
        .then((response) => {
            alert("Deletado com sucesso!")
            getAllUsers();
        }).catch((error) => {
            alert("Algo deu errado. Tente novamente!")
        })

        setInputNome("")
    }

    return (
        <Display>
            {/* PASSO 6: RENDERIZAR ISSO NA TELA */}
            <div>
                <p>{allUsers}</p>
            </div>
            
            {/* PASSO 7: CRIAÇÃO DE UM FORMULÁRIO */}
            <Form>
                <input type="text" value={inputNome} placeholder="Insira o nome:" onChange={handleInputNome} />
                <input type="text" value={inputEmail} placeholder ="Insina o e-mail:" onChange={handleInputEmail} />
                <ButtonAdd onClick={createUser}>
                    Adicionar
                </ButtonAdd>
                <ButtonDelete onClick={deleteUser}>
                    Excluir
                </ButtonDelete>
            </Form>
        </Display>
    )
}

export default Usuarios;