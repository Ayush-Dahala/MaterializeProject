import Ecommerce from "./Components/Ecommerce/Ecommerce";
import Login from "./Components/Login";
import {Routes,Route} from 'react-router-dom'
import Profile from './Components/Profile/Profile'
import List from "./Components/List/List";
import InvoiceList from "./Components/InvoiceList/List";
import RolesPermission from "./Components/RolesPermission/RolesPermission";
import GridContainer from "./Components/Roles/Role/GridContainer";
import PreviewContainer from "./Components/Preview/Preview/PreviewContainer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Ecommerce" element={<Ecommerce/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path="/invoiceList" element={<InvoiceList/>}/>
        <Route path="/rolesPermission" element={<RolesPermission/>}/>
        <Route path="/role" element={<GridContainer/>}/>
        <Route path="/preview" element={<PreviewContainer/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
