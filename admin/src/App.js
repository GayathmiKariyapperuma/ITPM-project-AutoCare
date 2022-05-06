import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';
import Home from "./pages/home/Home";
import Addservice from "./pages/addservices/Addservices";
import Addemployees from "./pages/addemployee/addemployees";
import Viewemployee from "./pages/view employees/View employee";
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

       </Switch>
     </div>
    </Router>
  );
}

export default App;
