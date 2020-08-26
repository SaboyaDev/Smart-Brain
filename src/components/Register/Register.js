import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			email: '',
			password: '',
		};
	}

	onNameChange = (event) => {
		this.setState({ name: event.target.value });
	};

	onEmailChange = (event) => {
		this.setState({ email: event.target.value });
	};

	onPasswordChange = (event) => {
		this.setState({ password: event.target.value });
	};

	onSubmitRegister = (event) => {
		event.preventDefault();
		const { name, email, password } = this.state;
		const { loadUser, onRouteChange } = this.props;
		fetch('http://localhost:3001/register', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				name,
				email,
				password,
			}),
		})
			.then((response) => response.json())
			.then((user) => {
				if (user) {
					loadUser(user);
					onRouteChange('home');
				}
			});
	};

	render() {
		const {
			onNameChange,
			onEmailChange,
			onPasswordChange,
			onSubmitRegister,
		} = this;
		return (
			<article className='signin_box br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
				<main className='pa4 white-90'>
					<form className='measure'>
						<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
							<div className='center'>
								<legend className='f2 fw6 ph0 mh0'>Register</legend>
							</div>
							<div className='mt3'>
								<label className='db fw6 lh-copy f6' htmlFor='email-address'>
									Name
								</label>
								<input
									onChange={onNameChange}
									className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='text'
									name='name'
									id='name'
								/>
							</div>
							<div className='mt3'>
								<label className='db fw6 lh-copy f6' htmlFor='email-address'>
									Email
								</label>
								<input
									onChange={onEmailChange}
									className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='email'
									name='email-address'
									id='email-address'
								/>
							</div>
							<div className='mv3'>
								<label className='db fw6 lh-copy f6' htmlFor='password'>
									Password
								</label>
								<input
									onChange={onPasswordChange}
									className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='password'
									name='password'
									id='password'
								/>
							</div>
						</fieldset>
						<div className=''>
							<input
								onClick={onSubmitRegister}
								className='b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib'
								type='submit'
								value='Register'
							/>
						</div>
					</form>
				</main>
			</article>
		);
	}
}

export default Register;
