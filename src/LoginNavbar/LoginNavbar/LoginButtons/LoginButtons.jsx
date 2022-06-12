import PropTypes from 'prop-types'

const LoginButtons = ({handleForm}) => {
    
  return (
            <form className="loginNavbar" onSubmit={(e) => handleForm(true, e)}>
                <button className='btn' type="submit">Log In</button>
                <div className='noAccount'>
                    <button className='btn' type="button">Sign In</button>
                    <a>Have an account here</a>
                </div>
            </form>
  )
}

LoginButtons.propTypes = {
    handleForm: PropTypes.func
}

export default LoginButtons