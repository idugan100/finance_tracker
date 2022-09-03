import './App.css'
import { BrowserRouter,Switch,Route } from 'react-router-dom'; 
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/login'>
         
          <Login/>
        </Route>
        <Route path='/signup'>
          <Signup/>

        </Route>
        <Route exact path='/'> 
          <Home/>
          </Route>
      </Switch>
       
      
      </BrowserRouter>
      
    </div>
  );
}

export default App
