import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { useAuthContext } from "./hooks/useAuthContext";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Signup } from "./pages/signup/Signup";
function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/">
              {user ? <Home /> : <Redirect to="/login" />}
            </Route>
            <Route exact path="/login">
              {!user ? <Login /> : <Redirect to="/" />}
            </Route>
            <Route exact path="/signup">
              {!user ? <Signup /> : <Redirect to="/" />}
            </Route>
          </Switch>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
