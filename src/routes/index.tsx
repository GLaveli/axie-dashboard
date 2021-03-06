import { Route, Switch } from "react-router-dom"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import PrivateRoutes from "./PriveRoutes"


const Routes = () => {
 return (
  <Switch>
   <Route path='/' exact component={Login} />
   <PrivateRoutes path='/dashboard' component={Dashboard} />
  </Switch>
 )

}

export default Routes