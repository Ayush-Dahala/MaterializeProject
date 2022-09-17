import Ecommerce from "./Components/Ecommerce/Ecommerce";
import Login from "./Components/Login";
import {Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Ecommerce" element={<Ecommerce/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
