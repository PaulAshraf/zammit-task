import React from 'react'
import { LogoWrapper, Wrapper, HorizontalLine, Graphic } from './styles'

import zammitLogo from '../../assets/images/zammitLogo.png'
import graphic1 from '../../assets/images/graphic1.png'
import graphic2 from '../../assets/images/graphic2.png'

const Footer = () => {
	return (
		<Wrapper>
			<Graphic width='300px' src={graphic1} alt='Graphic' />
			<LogoWrapper>
				<HorizontalLine />
				<img width='200px' src={zammitLogo} alt='Zammit Logo' />
			</LogoWrapper>
			<Graphic width='300px' src={graphic2} alt='Graphic' />
		</Wrapper>
	)
}

export default Footer
