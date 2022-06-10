import Login from "./Login";
import MainSite from "./MainSite/MainSite";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

const defaultOptions = {
    colorTheme: 'dark-theme'
}

const defaultUser = {
    userId: uuidv4(),
    userName: '',
    pass: '', 
    loginState: false,
    userOptions: defaultOptions
}

const App = () => {

    const [user, alterUser] = useState(defaultUser)
  
    return (
    <div>
        { user.loginState ? <MainSite user={user} alterUser={alterUser} /> : <Login user={user} alterUser={alterUser} /> }
    </div>
  )



}

export default App