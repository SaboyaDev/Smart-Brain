import React, { Component } from 'react';
import './Signin.css';

class Signin extends Component {
	constructor() {
		super();
		this.state = {
			signedInEmail: '',
			signedInPassword: '',
		};
	}

	onEmailChange = (event) => {
		this.setState({ signedInEmail: event.target.value });
	};
	onPasswordChange = (event) => {
		this.setState({ signedInPassword: event.target.value });
	};
	onSubmitSignIn = (event) => {
		event.preventDefault();
		const { signedInEmail, signedInPassword } = this.state;
		console.log(this.state);
		fetch('http://localhost:3001/signin', {
			method: 'post',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				email: signedInEmail,
				password: signedInPassword,
			}),
		})
			.then((response) => response.json())
			.then((user) => {
				if (user.id) {
					this.props.loadUser(user);
					this.props.onRouteChange('home');
				}
			});
	};

	render() {
		const { onRouteChange } = this.props;
		const { onEmailChange, onPasswordChange } = this;
		return (
			<article className='signin_box br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center'>
				<main className='pa4 white-90'>
					<form className='measure'>
						<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
							<div className='center'>
								<legend className='f2 fw6 ph0 mh0'>Sign In</legend>
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
								onClick={this.onSubmitSignIn}
								className='b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib'
								type='submit'
								value='Sign In'
							/>
						</div>
						<div className='lh-copy mt3'>
							<p
								onClick={() => onRouteChange('register')}
								className='f6 link dim white db pointer'
							>
								Register
							</p>
						</div>
					</form>
				</main>
			</article>
		);
	}
}

export default Signin;
