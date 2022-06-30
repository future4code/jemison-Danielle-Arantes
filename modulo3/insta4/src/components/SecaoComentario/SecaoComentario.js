import React, {useState} from 'react'
import styled from 'styled-components'

const CommentContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

export function SecaoComentario(props) {

	const [coment, setFazerComentario] = useState("")

  	const fazerComentario = (event) => {
      	setFazerComentario(event.target.value) 
		console.log("comentario feito")
  	}
	return (
		<CommentContainer>
			<input placeholder='Comentário' onChange={fazerComentario} value={coment}/>
			<button onClick={props.aoEnviar}>Enviar</button>
		</CommentContainer>
	)
}