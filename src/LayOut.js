
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/home" style={{textDecoration : "none"}}>Home</Link>
          </li>
          <li>
            <Link to="/registration" style={{textDecoration : "none"}}>Registration</Link>
          </li>
          <li>
            <Link to="/login" style={{textDecoration : "none"}}>Login</Link>
          </li>

          <li>
            <Link to="/about" style={{textDecoration : "none"}}>AboutUS</Link>
          </li>

          <li>
            <Link to="/service" style={{textDecoration : "none"}}>Services</Link>
          </li>
          <li>
            <Link to="/placement" style={{textDecoration : "none"}}>Placement</Link>
          </li>
          <li>
            <Link to="/contactUs" style={{textDecoration : "none"}}>ContactUs</Link>
          </li>
        </ul>
      </nav>
      <hr size="3px" color="red"/>
      <Outlet />
    </>
  )
};

export default Layout;