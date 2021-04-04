import './App.css';
import Topbar from './components/Topbar';
import MapToShow from './components/MapToShow';


function App() {
  return (
    <div className="App">
     <Topbar/>
     <div className="background">
       <div className="white-box">
         <h1>Taking care of your pet</h1>
       </div>

       <div className="col-1"></div>
       
       <div className="col-2"></div>
     </div>
     <MapToShow/>
    </div>
  );
}

export default App;
