import PropTypes from 'prop-types'

const PresentationCard = ({handleLoginForm, handleSignOutForm}) => {
  return (
    <div className="container prsnt"> 
        <h1 className="prsnt-title animate__animated animate__backInDown"> Bienvenido a Yume </h1>
        <button className='prsnt-btn-lg animate__animated animate__backInLeft' type="submit" onClick={(e) => handleLoginForm(true, e)}>Log In</button>
        <button className='prsnt-btn-sg animate__animated animate__backInRight' type="button" onClick={(e) => handleSignOutForm(true, e)}>Sign In</button>
    </div>
  )
}

PresentationCard.propTypes = {
  handleLoginForm: PropTypes.func,
  handleSignOutForm: PropTypes.func
}

export default PresentationCard