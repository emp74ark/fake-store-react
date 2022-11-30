import { FC, useContext } from "react";
import "./header.component.scss";
import logo from "../../assets/images/fakestore-logo.png"
import { NavLink } from "react-router-dom";
import { signout } from "../../services/user.service";
import { authContext } from "../../context/state";

export const HeaderComponent: FC = () => {
  const {state} = useContext(authContext);
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
              <NavLink to={'/auth'}>
                Login
              </NavLink>
            </li>
            {
              state.authenticated &&
              <>
                <li>
                  <NavLink to={'/cart'}>Cart</NavLink>
                </li>
                <li>
                  <NavLink to={'/user'}>User</NavLink>
                </li>
                <li>
                  <span onClick={signout}>Logout</span>
                </li>
              </>
            }
          </ul>
        </nav>
      </header>
  );
}