import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import CreatePassword from './components/CreatePassword'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from './utils/themes'

function App() {
	return (
		<>
			<ThemeProvider theme={theme.default}>
				<Wrapper>
					<Header />
					<section>
						<CreatePassword />
					</section>
					<Footer />
				</Wrapper>
			</ThemeProvider>
		</>
	)
}

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0;
	padding: 0;
	height: 100%;
	min-height: 100vh;
	width: 100vw;
	background-color: ${(props) => props.theme.bgColorDesktop};
	font-family: ${(props) => props.theme.fontFamily};

	@media (max-width: ${(props) => props.theme.breakpoint}) {
		background-color: ${(props) => props.theme.bgColorMobile};
	}
`

export default App
