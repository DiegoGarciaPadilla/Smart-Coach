import { Navigate, Outlet } from "react-router-dom";
const ProtectedAdmin = (props) => {
  if (props.credenciales === "undefined") {
    return <Navigate to={"/"} replace />;
  }
  if (props.admin === "0") {
    return <Navigate to={"/"} replace />;
  }
  return props.children ? props.children : <Outlet />;
};
export default ProtectedAdmin;
