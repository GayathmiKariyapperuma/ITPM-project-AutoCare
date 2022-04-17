import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';
import Home from "./pages/home/Home";
import Addservice from "./pages/addservices/Addservices";
import Addsupplier from "./pages/addsupplier/Addsupplier";
import SDetails from "./pages/supplierdetails/SDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Topbar />

     <div className="container">
       <Sidebar/>
       <Switch>
         
       <Route exact path="/">
         <Home/>
         </Route>

         {/*Services and Work Progess*/}
         <Route exact path="/addservice">
          <Addservice/>
          </Route>

          {/*Supplier and Inventory*/}
         <Route exact path="/addsupplier">
          <Addsupplier/>
          </Route>
          <Route exact path="/supplierdetails">
            <SDetails/>
          </Route>

       </Switch>
     </div>
    </Router>
  );
}

export default App;
