import { Outlet } from "react-router-dom";


const AuthLayout = () => {
  return (
    <div> Layout
      <Outlet></Outlet>
      
    </div>
  );
};

export default AuthLayout;