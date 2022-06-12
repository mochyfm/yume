import PropTypes from 'prop-types'
import { useState } from 'react'
import LoginCard from '../LoginCard'
import LogedStage from './LogedStage'
import LoginButtons from './LoginButtons'

const Login = ({ user, alterUser}) => {

    const [loginFormState, setLoginFormState] = useState(false)

    const handleForm = (state, e) => {
        e.preventDefault();
        setLoginFormState(state);
    }

  return (
    <div>
        { !loginFormState ?
        <nav className={user.userOptions.colorTheme + ' animate__slideInDown'}>
            <div className={user.userOptions.colorTheme + ' logo-site'}>
                <img src='images/logo.png'/>
                <span>YuMe</span>
            </div>
            <div className={user.userOptions.colorTheme + ' link-buttons'}>
                <a>About us</a>
                <a>Merchandising</a>
                <a>Contact</a>
                <a>{user.username}</a>
            </div>
            { user.loginState ? <LogedStage user={user} handleForm={handleForm} alterUser={alterUser}/> : <LoginButtons handleForm={handleForm} />}
        </nav> 
        : <LoginCard user={user} alterUser={alterUser} setLoginFormState={setLoginFormState}/>}
    </div>
  )
}

Login.propTypes = {
    user: PropTypes.object,
    alterUser: PropTypes.func
}

export default Login