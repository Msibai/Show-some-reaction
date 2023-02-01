import React from 'react';
import {Link} from 'react-router-dom';


function ForgotPasswordForm() {
    return (
        <div className={"forgot-password-container"}>


            <h2 className={"forgot-password-title"}>Forgot your password?</h2>
            <p className={"forgot-password-intro"}> Thats not a problem, we'll send a new one to your email.</p>
            <form>
                <label className={"email-label-forgot-password"} htmlFor={"email"}>
                </label>
                <input
                    type="email"
                    placeholder="your@email.com"
                    id="email"
                    name="email"
                    className="email"
                    />
                <div>
                    <Link to={"/login"}>
                <button className={"forgot-password-button"}>Submit</button>
                    </Link>
                </div>
                </form>
        </div>

    );
}

export default ForgotPasswordForm;