import PropTypes from 'prop-types'

const SignInCard = ({handleSignOutForm}) => {
  return (
    <div className=''>
        <button onClick={(e) => handleSignOutForm(false, e)}>Cancel</button>
    </div>
  )
}

SignInCard.propTypes = {
    handleSignOutForm: PropTypes.func
}

export default SignInCard