import LoginNavbar from "./LoginNavbar/LoginNavbar";
// import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import PresentationCard from "./PresentationCard/PresentationCard";
import SocialMedia from "./SocialMedia";

const defaultOptions = {
    colorTheme: 'dark-theme'
}

const defaultUser = {
    userName: '',
    pass: '', 
    loginState: false,
    userOptions: defaultOptions
}

const App = () => {

    const [user, alterUser] = useState(defaultUser)

    const [usersList, alterUsersList] = useState([]);

    const [loginFormState, setLoginFormState] = useState(false)

    const [registerFormState, setRegisterFormState] = useState(false)

    const handleLoginForm = (state, e) => {
        e.preventDefault();
        setLoginFormState(state);
    }

    const handleSignOutForm = (state, e) => {
        e.preventDefault();
        setRegisterFormState(state)
    }
  
    return (
    <div>
        <LoginNavbar user={user} alterUser={alterUser} usersList={usersList} alterUsersList={alterUsersList}
        loginFormState={loginFormState} registerFormState={registerFormState} handleLoginForm={handleLoginForm} handleSignOutForm={handleSignOutForm}/>
        {!user.loginState && !loginFormState && !registerFormState ? <PresentationCard setLoginFormState={setLoginFormState} setRegisterFormState={setRegisterFormState} handleLoginForm={handleLoginForm} handleSignOutForm={handleSignOutForm}/> : null}
        {user.loginState && !loginFormState && !registerFormState? <SocialMedia user={user} setLoginFormState={setLoginFormState} setRegisterFormState={setRegisterFormState} handleLoginForm={handleLoginForm} handleSignOutForm={handleSignOutForm}/> : null}
    </div>
  )



}

export default App