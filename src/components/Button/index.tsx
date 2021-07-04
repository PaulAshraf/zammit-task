import React, { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

const Button = (
	props: { text: string; disabeled?: boolean } & ButtonHTMLAttributes<any>
) => {
	return (
		<StyledButton disabled={props.disabeled} {...props}>
			{props.text}
		</StyledButton>
	)
}

const StyledButton = styled('button')<
	{ disabled?: boolean } & ButtonHTMLAttributes<any>
>`
	width: 100%;
	background-color: ${(props) =>
		props.disabled ? props.theme.accentColor : 'black'};
	color: ${(props) => (props.disabled ? 'black' : 'white')};
	font-size: 14px;
	display: flex;
	justify-content: center;
	align-items: center;
	height: 30px;
	border-radius: 5px;
	font-family: ${(props) => props.theme.fontFamily};
	cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
	border: none;
	margin-top: 20px;
	transition: all 0.3s ease-in-out;
`

export default Button
