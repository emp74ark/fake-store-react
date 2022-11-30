import { FC, useContext } from "react";
import "./header.component.scss";
import logo from "../../assets/images/fakestore-logo.png"
import { NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../../context/state";

export const HeaderComponent: FC = () => {
  const {state, dispatch} = useContext(authContext);
  const navigate = useNavigate();
  const logoutHandler = () => {
    dispatch({type: "auth", payload: false});
    dispatch({type: "token", payload: ""});
    navigate('/auth');
  }
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
            {
              !state.authenticated &&
              <li>
                <NavLink to={'/auth'}>
                  Login
                </NavLink>
              </li>
            }
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
                  <span onClick={logoutHandler}>Logout</span>
                </li>
              </>
            }
          </ul>
        </nav>
      </header>
  );
}