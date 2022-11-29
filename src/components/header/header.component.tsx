import { FC } from "react";
import "./header.component.scss";
import logo from "../../assets/images/fakestore-logo.png"
import { NavLink } from "react-router-dom";

export const HeaderComponent: FC = () => {
  return (
      <header>
        <NavLink to={'/'}>
          <img src={logo} alt="Fake store"/>
        </NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to={'/store'}>Catalogue</NavLink>
            </li>
            <li>
              <NavLink to={'/cart'}>Cart</NavLink>
            </li>
            <li>
              <NavLink to={'/user'}>
                User
              </NavLink>
            </li>
            <li>
              <NavLink to={'/auth'}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to={''}>Logout</NavLink>
            </li>
          </ul>
        </nav>
      </header>
  );
}