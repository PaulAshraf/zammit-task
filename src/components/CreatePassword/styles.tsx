import styled from 'styled-components'

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
`

const Container = styled.div`
	width: 300px;
	height: 350px;
	background-color: white;
	padding: 20px;
	border-radius: 5px;
	margin-top: 30px;
	border: solid ${(props) => props.theme.accentColor} 1px;

	@media (max-width: ${(props) => props.theme.breakpoint}) {
		border: none;
	}
`

const Title = styled.div`
	width: 100%;
	text-align: center;
	font-size: 20px;
	font-weight: 600;
	margin-bottom: 20px;
`

const ShowPasswordWrapper = styled.div`
	display: flex;
	align-items: center;
	font-size: 12px;
`

export { Wrapper, Container, Title, ShowPasswordWrapper }
