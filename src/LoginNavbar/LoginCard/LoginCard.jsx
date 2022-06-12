import PropTypes from 'prop-types'
import { useState } from 'react'

const LoginCard = ({user, alterUser, setLoginFormState}) => {

    const [form, setForm] = useState({
        userName: '',
        pass: '',
        userOptions: user.userOptions
    });

    const handleInput = ({target}) => {
        setForm({
            ...form,
            [target.name]: target.value
        })
    }

    const handleLogin = (e) => {
        e.preventDefault();
            alterUser({
                ...form,
                loginState: true
            })
            setLoginFormState(false);
            setForm('')
    }

  return (
    <div className="container loginCard animate__fadeInLeft">
        <h1>Login</h1>
        <form className="loginForm" onSubmit={handleLogin}> 
            <div className="lg-form">
                <label>Username</label>
                <input type="text" name="userName" placeholder="Introduce your Username" value={form.userName} onChange={handleInput}/>
                <label>Password</label>
                <input type="password" name="pass" placeholder="Introduce your Password" value={form.pass} onChange={handleInput}/>
            </div>
            <div className="lg-buttons">
                <button className="btn" type="submit">Send</button>
                <button className="btn" type="button" onClick={() => setLoginFormState(false)}>Cancel</button>
            </div>
        </form>
    </div>
  )
}

LoginCard.propTypes = {
    user: PropTypes.object,
    alterUser: PropTypes.func,
    setLoginFormState: PropTypes.func
}

export default LoginCard