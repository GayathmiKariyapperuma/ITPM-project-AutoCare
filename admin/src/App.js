import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';
import { useState } from "react";
import Home from "./pages/home/Home";
import Addservice from "./pages/addservices/Addservices";
import Workprogress from "./pages/workprogess/Workprogress";
import Pendingpage from "./pages/pending page/Pendingpage";
import Inprogress from "./pages/Inprogress page/InprogressPage";
import Startservice from "./pages/start service/Startservice";
import Finishpage from "./pages/finish page/Finishpage";
import Editpage from "./pages/Edit Page/Editpage";
import Deletepage from "./pages/delete page/Deletepage";
import Editordeletepage from "./pages/Edit or delete page/Edit or delete page";
import Sreportpage from "./pages/service report page/Sreportpage";
import Addemployees from "./pages/addemployee/addemployees";
import Viewemployee from "./pages/view employees/View employee";
import Employeeprofile from "./pages/employee profile/Employee profile";
import Updateemployee from "./pages/updateemployee/Updateenployee";
import Employeeallowance from "./pages/employeeallowance/Employeeallowance";
import Employeepaysalary from "./pages/paysalary/Employeepaysalary";
import Ereportpage from "./pages/employee report page/Ereportpage";
import Addcustomer from "./pages/addcustomer/Addcustomer";
import Addvehicle from "./pages/addvehicle/Addvehicle";
import Cusandveh from "./pages/cusandveh/cusandveh";
import Viewcustomer from "./pages/viewcustomer/viewcustomer";
import Viewvehicle from "./pages/viewvehicle/viewvehicle";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [search, setSearch] = useState("");
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

          <Route exact path="/workprogress">
          <Workprogress/>
          </Route>

          <Route exact path="/workprogress/pendingservices">
          <Pendingpage setSearch={setSearch} search={search}/>
          </Route>

          <Route exact path="/workprogress/startservice/:id">
          <Startservice/>
          </Route>
          
          <Route exact path="/workprogress/inprogressservices">
          <Inprogress setSearch={setSearch} search={search}/>
          </Route>

          <Route exact path="/workprogress/finishservices">
          <Finishpage setSearch={setSearch} search={search}/>
          </Route>

          <Route exact path="/workprogress/editordeleteservice/:id">
          <Editordeletepage/>
          </Route>

          <Route exact path="/workprogress/editservice/:id">
          <Editpage/>
          </Route>

          <Route exact path="/workprogress/deleteservice/:id">
          <Deletepage/>
          </Route>

          <Route exact path="/service_report">
          <Sreportpage setSearch={setSearch} search={search}/>
          </Route>


          {/* Employee & Finance Management*/}
          <Route exact path="/addemployee">
          <Addemployees/>
          </Route>

          <Route exact path="/viewemployees">
          <Viewemployee/>
          </Route>

          <Route exact path="/employee/profile/:id">
          <Employeeprofile/>
          </Route>

          <Route exact path="/employee/profile/update/:id">
          <Updateemployee/>
          </Route>

          <Route exact path="/allowance/:id">
          <Employeeallowance/>
          </Route>

          <Route exact path="/paysalary/:id">
          <Employeepaysalary/>
          </Route>

          <Route exact path="/salary_report">
          <Ereportpage setSearch={setSearch} search={search}/>
          </Route>

          {/* Customer & Vehicle Management */}
          <Route exact path="/addcustomer">
          <Addcustomer/>
          </Route>

          <Route exact path="/addvehicle">
          <Addvehicle/>
          </Route>

          <Route exact path="/viewmgt">
          <Cusandveh/>
          </Route>
          
          <Route exact path="/viewcustomer">
          <Viewcustomer setSearch={setSearch} search={search}/>
          </Route>

          <Route exact path="/viewvehicle">
          <Viewvehicle setSearch={setSearch} search={search}/>
          </Route>

       </Switch>
     </div>
    </Router>
  );
}

export default App;
