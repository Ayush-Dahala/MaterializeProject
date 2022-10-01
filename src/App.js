import Ecommerce from "./Components/Ecommerce/Ecommerce";
import Login from "./Components/Login";
import {Routes,Route} from 'react-router-dom'
import Profile from './Components/Profile/Profile'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Ecommerce" element={<Ecommerce/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
