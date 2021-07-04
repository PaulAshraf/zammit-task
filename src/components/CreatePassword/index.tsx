import React from 'react'
import { Form, Formik, FormikErrors } from 'formik'
import { Wrapper, Container, Title } from './styles'
import ValidationCheck from '../ValidationCheck'
import Button from '../Button'
import InputField from '../InputField'

const CreatePassword = () => {
	const validatePassword = (value: string) => {
		let passing = [false, false]
		if (!value) return passing

		// length more than 8
		if (value.length >= 8) passing[0] = true

		// number or special charcter
		if (/^(?=.*[0-9])|(?=.*[!@#$%^&*.])/.test(value)) passing[1] = true

		if (passing[0] && passing[1]) return null

		return passing
	}

	const isValid = (errors: FormikErrors<{ password: string }>) =>
		!errors.password || (!!errors.password[0] && !!errors.password[1])

	return (
		<Wrapper>
			<Container>
				<Title>Create your Password</Title>
				<Formik
					initialValues={{
						password: '',
					}}
					validateOnMount
					isInitialValid={false}
					onSubmit={(values) => {
						alert(`Your password is ${values.password} :P`)
					}}
				>
					{({ errors }) => (
						<Form>
							<InputField
								name='password'
								type='password'
								validate={validatePassword}
							/>
							<div>
								<ValidationCheck
									text='8 letters please!'
									isValid={!errors.password || !!errors.password[0]}
								/>
								<ValidationCheck
									text='Number or special charcter'
									isValid={!errors.password || !!errors.password[1]}
								/>
							</div>

							<Button
								disabeled={!isValid(errors)}
								type='submit'
								text='Signup'
							/>
						</Form>
					)}
				</Formik>
			</Container>
		</Wrapper>
	)
}

export default CreatePassword
