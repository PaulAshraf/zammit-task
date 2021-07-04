import React from 'react'
import { Wrapper } from '../Header/styles'
import zammitLogo from '../../assets/images/zammitLogo.png'

const Header = () => {
	return (
		<Wrapper>
			<img width='300px' src={zammitLogo} alt='Zammit Logo' />
		</Wrapper>
	)
}

export default Header
