import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
  if (!props.credenciales || props.credenciales === "undefined") {
    return <Navigate to={"/"} replace />;
  }
  return props.children ? props.children : <Outlet />;
};
export default ProtectedRoute;
