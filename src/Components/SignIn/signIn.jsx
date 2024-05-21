import React from 'react';
import './signIn.css';

function SignIn() {
    return (
        <div className="sign-in-container">
            <div className="back-link">&larr; Back</div>
            <h1>Sign In</h1>
            <p>Enter your email and password to sign in!</p>
            <form>
                <div className="input-group">
                    <label htmlFor="email">Email*</label>
                    <input type="email" id="email" name="email" placeholder="mail@simmnple.com" required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password*</label>
                    <input type="password" id="password" name="password" placeholder="Min. 8 characters" required />
                </div>
                <div className="options">
                    <label>
                        <input type="checkbox" id="keepSignedIn" />
                        Keep me logged in
                    </label>
                    <button type="button" className="forgot-password">Forget password?</button>
                </div>
                <button type="submit" className="sign-in-button">Sign In</button>
            </form>
            <p className="create-account">
                Not registered yet? <button type="button" className="create-account-link">Create an Account</button>
            </p>
        </div>
    );
}

export default SignIn;
