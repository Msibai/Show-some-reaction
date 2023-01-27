import React, {useState} from 'react';
import './Loginstyle.css';
import {Link} from 'react-router-dom';
import {Icon} from 'react-icons-kit';
import {eyeDisabled} from 'react-icons-kit/ionicons/eyeDisabled'
import {eye} from 'react-icons-kit/ionicons/eye'
function Login(props) {
    const [email, setEmail] =useState('');
    const [pass, setPass] =useState('');
    const[type, setType] =useState('password');
    const[icon, setIcon] = useState(eyeDisabled)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log( email);
        console.log(pass);
    }

    const handleToggle=()=>{
        if(type==='password'){
            setIcon(eye);
            setType('text');
        }
        else{
            setIcon(eyeDisabled);
            setType('password');
        }
    }

    return (
        <>
            <div className="login-form-container">
                <img src="src/images/icon3.png" className="login-logo"/>
                <h2 className="welcome-message"> Glad to see you again!</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <label className="email-label" htmlFor="email">Username</label>
                <input value={email} onChange={(e => setEmail(e.target.value))} type="email" placeholder="youremail@gmail.com" id="email" className="email" />
                <label className="pass-label"htmlFor="password">Password</label>
            <div className="pass-eye-div">
                <input value={pass} onChange={(e => setPass(e.target.value))} type="password" placeholder="*************" id="password" className="password" />
                <span onClick={handleToggle}><Icon icon={icon} size={20}/></span></div>
                <button className="login-button">Log In</button>
                <Link to={"/"} className="text-for-signup"> Don't have an account? Go to Sign Up</Link>

            </form>
            </div>
        </>
    );
}

export default Login;