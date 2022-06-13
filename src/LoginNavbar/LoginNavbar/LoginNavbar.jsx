import PropTypes from 'prop-types'
import LoginCard from '../LoginCard'
import SignInCard from '../SignInCard'
import LogedStage from './LogedStage'
import LoginButtons from './LoginButtons'

const LoginNavbar = ({ user, alterUser, loginFormState, registerFormState, handleSignOutForm , handleLoginForm , usersList, alterUsersList}) => {

  return (
    <div>
        {!loginFormState && !registerFormState ? 
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
            { user.loginState ? <LogedStage user={user} handleLoginForm={handleLoginForm} alterUser={alterUser}/> 
            : <LoginButtons handleLoginForm={handleLoginForm} handleSignOutForm={handleSignOutForm} usersList={usersList} alterUsersList={alterUsersList} />}
        </nav> 
        : loginFormState && !registerFormState ? <LoginCard user={user} alterUser={alterUser} handleLoginForm={handleLoginForm}/> :
        !loginFormState && registerFormState ? <SignInCard handleSignOutForm={handleSignOutForm}/> : null }
    
    </div>
  )
}

LoginNavbar.propTypes = {
    loginFormState: PropTypes.bool,
    registerFormState: PropTypes.bool,
    handleSignOutForm: PropTypes.func,
    handleLoginForm: PropTypes.func,
    user: PropTypes.object,
    alterUser: PropTypes.func,
    usersList: PropTypes.array,
    alterUsersList: PropTypes.func
}

export default LoginNavbar