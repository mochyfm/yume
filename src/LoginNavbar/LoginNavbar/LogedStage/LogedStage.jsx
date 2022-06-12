import PropTypes from 'prop-types'
// import { useState } from 'react'

const LoginStage = ({ user, handleForm, alterUser }) => {

  const logout = (e) => {
    handleForm(false, e);
    alterUser({
      ...user,
      loginState: false,
    })
  }

  return (
    <>
        <form className='profile-nav-panel' onSubmit={(e) => logout(e)}>
          <span className='username'>{user.userName}</span>
          <div>
            <img src="images/profile/profpic.jpg" alt="" className="profile-pic"/>
          </div>
          <button className='sign-out' type='submit'><i className="fa fa-sign-out" aria-hidden="true"></i></button>
          
          
        </form>
    </>
  )
}

LoginStage.propTypes = {
  user: PropTypes.object,
  handleForm: PropTypes.func,
  alterUser: PropTypes.func
}

export default LoginStage