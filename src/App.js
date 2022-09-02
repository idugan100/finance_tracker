import './App.css'
import { BrowserRouter,Switch,Route } from 'react-router-dom'; 
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
        <Route exact path='/'>
         
          <Login/>
        </Route>
        <Route path='/signup'>
          <Signup/>

        </Route>
        <Route path='/home/:id'> 
          <Home/>
          </Route>
      </Switch>
       
      
      </BrowserRouter>
      
    </div>
  );
}

export default App
