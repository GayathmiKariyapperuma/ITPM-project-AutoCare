import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';
import Home from "./pages/home/Home";
import Addservice from "./pages/addservices/Addservices";
import Addemployees from "./pages/addemployee/addemployees";
import Viewemployee from "./pages/view employees/View employee";
import Employeeprofile from "./pages/employee profile/Employee profile";
import Updateemployee from "./pages/updateemployee/Updateenployee";
import Employeeallowance from "./pages/employeeallowance/Employeeallowance";
import Employeepaysalary from "./pages/paysalary/Employeepaysalary";
import Ereportpage from "./pages/employee report page/Ereportpage";
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


       </Switch>
     </div>
    </Router>
  );
}

export default App;
