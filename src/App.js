import './App.css';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import Ads from './components/Ads';
import AdsScreen from './components/AdsScreen';
import { Switch, Route} from 'react-router-dom';
import Log from './components/Log';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Topbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Log} />
        <Route exact path="/Ad/:id" component={AdsScreen} />
        <Route exact path="/Ads" component={Ads} />
      </Switch>
     
    
     
     <Footer/>
    </div>
   
  );
}

export default App;
