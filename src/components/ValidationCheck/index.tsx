import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import styled from 'styled-components'

type Props = {
	isValid: boolean
	text: string
}

const ValidationCheck = (props: Props) => {
	return (
		<Container isValid={props.isValid}>
			<FaCheckCircle />
			<span>{props.text}</span>
		</Container>
	)
}

const Container = styled('div')<{ isValid: boolean }>`
	color: ${(props) =>
		props.isValid ? props.theme.confirmationColor : props.theme.accentColor};
	font-size: 18px;
	margin: 20px;
	margin-left: 0;
	margin-right: 0;
	display: flex;
	align-items: center;
	height: 10px;
	width: 100%;
	transition: all 0.3s ease-in-out;

	& * {
		margin-left: 5px;
	}
`

export default ValidationCheck
