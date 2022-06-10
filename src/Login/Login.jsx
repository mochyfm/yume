import PropTypes from 'prop-types'

const Login = ({ user, alterUser}) => {
  return (
    <div>
        <nav className={user.userOptions.colorTheme}>
        <div className={user.userOptions.colorTheme + ' logo-site'}>
            <img src='images/logo.png'/>
            <span>YuMi</span>
        </div>
        <form className="loginForm">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Log In</button>
            <div className='noAccount'>
                <button className="btn btn-outline-success" type="submit">Sign In</button>
                <a>¿No tienes cuenta?</a>
            </div>
        </form>
        </nav>
    </div>
  )
}

Login.propTypes = {
    user: PropTypes.object,
    alterUser: PropTypes.func
}

export default Login