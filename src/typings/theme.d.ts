import 'styled-components'

declare module 'styled-components' {
	export interface DefaultTheme {
		textColor: string
		bgColorDesktop: string
		bgColorMobile: string
		confirmationColor: string
		accentColor: string
		fontFamily: string
		breakpoint: string
	}
}
