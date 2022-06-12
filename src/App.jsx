import LoginNavbar from "./LoginNavbar/LoginNavbar";
// import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

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
  
    return (
    <div>
        <LoginNavbar user={user} alterUser={alterUser} />
    </div>
  )



}

export default App