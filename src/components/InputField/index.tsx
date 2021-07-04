import { Field } from 'formik'
import styled from 'styled-components'

export default styled(Field)`
	border: solid ${(props) => props.theme.accentColor} 1px;
	width: 100%;
	height: 25px;
	border-radius: 5px;

	:focus {
		border: solid black 1px;
	}
`
