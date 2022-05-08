import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';
import Home from "./pages/home/Home";
import Addservice from "./pages/addservices/Addservices";
import Addsupplier from "./pages/addsupplier/Addsupplier";
import Addstock from "./pages/addstock/Addstock";
import SDetails from "./pages/supplierdetails/SDetails";
import Navigate from "./pages/reports/Navigate";
import Vsupplier from "./pages/viewsupplier/Viewsupplier";
import Vstock from "./pages/viewstock/Viewstock";
import Sreport from "./pages/supplierreport/Sreport";
import Ireport from "./pages/inventoryreport/Ireport";
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
          <Route exact path="/addstock">
            <Addstock/>
          </Route>
          <Route exact path="/supplierdetails">
            <SDetails/>
          </Route>
          <Route exact path="/viewsupplier">
            <Vsupplier/>
          </Route>
          <Route exact path="/reports">
            <Navigate/>
          </Route>
          <Route exact path="/viewstock">
            <Vstock/>
          </Route>
          <Route exact path="/supplierreport/Sreport">
            <Sreport/>
          </Route>
          <Route exact path="/inventoryreport/Ireport">
            <Ireport/>
          </Route>

       </Switch>
     </div>
    </Router>
  );
}

export default App;
