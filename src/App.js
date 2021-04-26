import './App.css';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import AdsScreen from './components/AdsScreen';
import {   Route} from 'react-router-dom';
import Login from './components/Log';
import Register from './components/Register';

import Home from './components/Home';
import SingleAdScreen from './components/SingleAdScreen';
import Add from './components/Add';

function App() {
  
  return (
    <div className="App">
     
      <Topbar/>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/register" component={Register} />

        <Route exact path="/adsList" component={AdsScreen} />
        <Route exact path="/adsList/:id" component={SingleAdScreen}/>
        <Route exact path="/add" component={Add}/>


     
    
     
     <Footer/>
    </div>
   
  );
}

export default App;
