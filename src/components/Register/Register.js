import React from 'react';
import './Register.css';

const Register = ({ onRouteChange }) => {
  return (
    <article className="signin_box br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 white-90">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <div className='center'>
              <legend className="f2 fw6 ph0 mh0">Register</legend>
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" id="name" />
            </div>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
              <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
            </div>
          </fieldset>
          <div className="">
            <input
              onClick={() => onRouteChange('home')}
              className="b ph3 pv2 input-reset ba white b--white bg-transparent grow pointer f6 dib"
              type="submit"
              value="Register" />
          </div>
        </form>
      </main>
    </article>
  );
};

export default Register;