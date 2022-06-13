import PropTypes from 'prop-types'

const LoginButtons = ({handleLoginForm, handleSignOutForm, usersList, alterUsersList}) => {


    
  return (
            <form className="loginNavbar" onSubmit={(e) => handleLoginForm(true, e)}>
                <button className='btn' type="submit">Log In</button>
                <div className='noAccount'>
                    <button className='btn' type="button" onClick={(e) => handleSignOutForm(true, e)}>Sign In</button>
                    <a>Have an account here</a>
                </div>
            </form>
  )
}

LoginButtons.propTypes = {
    handleLoginForm: PropTypes.func,
    handleSignOutForm: PropTypes.func,
    usersList: PropTypes.array,
    alterUsersList: PropTypes.func
}

export default LoginButtons