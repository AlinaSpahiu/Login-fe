import React, {useState, useEffect} from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import UserContext from "./context/UserContext"
import axios from "axios"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Header from "./components/Header"


function App() {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  })

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenRes = await axios.post(
        "http://localhost:5000/users/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenRes.data) {
        const userRes = await axios.get("http://localhost:5000/users/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };

    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <UserContext.Provider value={{userData, setUserData}}>
         <Header />
      <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/login" component={Login}/>
         <Route path="/register" component={Register}/>
      </Switch>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
