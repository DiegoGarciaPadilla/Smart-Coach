import { Navigate, Outlet } from "react-router-dom";
const ProtectedLogin = (props) => {
  if (props.credenciales) {
    return <Navigate to={"/home"} replace />;
  }
  return props.children ? props.children : <Outlet />;
};
export default ProtectedLogin;
