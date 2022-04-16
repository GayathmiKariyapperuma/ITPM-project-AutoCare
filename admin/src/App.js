import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import './App.css';
import Home from "./pages/home/Home";
import Addservice from "./pages/addservices/Addservices";
import Addemployees from "./pages/addemployee/addemployees";
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








          <Route exact path="/addemployee">
          <Addemployees/>
          </Route>

       </Switch>
     </div>
    </Router>
  );
}

export default App;
