import styled from 'styled-components'

const Wrapper = styled.footer`
	display: flex;
	justify-content: space-between;

	@media (max-width: ${(props) => props.theme.breakpoint}) {
		justify-content: center;
	}

	align-items: flex-end;

	min-height: 100px;
	margin: 20px;
	margin-top: auto;
`

const HorizontalLine = styled.hr`
	width: 300px;
	height: 0;
	border: 0;
	border-top: solid ${(props) => props.theme.accentColor} 1px;
	margin-bottom: 10px;
`

const LogoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-bottom: 20px;
`

const Graphic = styled.img`
	@media (max-width: ${(props) => props.theme.breakpoint}) {
		display: none;
	}
`

export { Wrapper, LogoWrapper, HorizontalLine, Graphic }
