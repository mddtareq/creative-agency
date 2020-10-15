import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Services/Admin/Admin';
import Services from './components/Services/Services/Services';
export const UserContext = createContext();

function App() {
  const [logged, setLogged] = useState({});
  return (
    <UserContext.Provider value={[logged, setLogged]}>
      <Router>
        <Switch>
          <Route  exact path="/">
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/services/:id">
            <Services></Services>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
