import styled from "styled-components";

export const Display = styled.div`
    display: flex;
    flex-direction: column;

    margin: 100px auto;
    padding: 10px;
    border: 2px solid gray;
    border-radius: 10px;

    width: 50%;
`

export const ListaUsuario = styled.p`
    display: flex;
    align-items: center;
    text-align: left;
    font-weight: bold;
`

export const Form = styled.form`
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr ;
    row-gap: 2vh;
    
    margin-top: 3vh;
    
    text-align: center;
    
    input {
        grid-column-start: 1;
        grid-column-end: 3;
        padding: 0.3vh 0.5vw;
        border: 2px solid black;
        border-radius: 5px;
    }

`

export const ButtonAdd= styled.button`
    padding: 10px;
    border-radius: 5px;
    
    background-color: green;
    color: white;
    
    font-weight: bold;
`

export const ButtonDelete = styled.button`
    margin-left: 10px;
    padding: 10px;
    border-radius: 5px;
    
    background-color: red;
    color: white;
    
    font-weight: bold;
`