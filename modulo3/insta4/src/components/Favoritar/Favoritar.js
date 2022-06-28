import React from 'react'
import styled from 'styled-components'

const IconFavoritar = styled.div`
	display: flex;
`
const IconFav = styled.img`
	margin-right: 5px;
`

export function Favoritar(props) {
	return <IconFavoritar>
		<IconFav alt={'Icone'} src={props.icone} onClick={props.onClickIcone}/>
	</IconFavoritar>
}
