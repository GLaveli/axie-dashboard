import { Redirect, Route, RouteProps } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

interface RoutesPropsData extends RouteProps {
 role?: string;
}

const PrivateRoutes: React.FC<RoutesPropsData> = ({ role, ...rest }) => {
 const { userLogged } = useAuth();
 console.log(userLogged);

 const hasPermission = true;

 return (
  hasPermission ? (<Route {...rest} />) : <Redirect to='/' />
 )
};

export default PrivateRoutes;