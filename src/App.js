import './App.css'
import { BrowserRouter,Switch,Route,Redirect} from 'react-router-dom'; 
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import {useAuthContext} from './hooks/useAuthContext'


function App() {
  const {authIsReady, user}=useAuthContext();
  return (
    <div className="App">
      {authIsReady &&(
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/login'>
          {user && <Redirect to='/'/>}
          {!user &&<Login/>}
        </Route>
        <Route path='/signup'>
          {user && <Redirect to='/'/>}
          {!user && <Signup/>}

        </Route>
        <Route exact path='/'> 
          {!user && <Redirect to='/login'/>}
          {user && <Home/>}
          </Route>
      </Switch>
       
      
      </BrowserRouter>
      )}
      
    </div>
  );
}

export default App
