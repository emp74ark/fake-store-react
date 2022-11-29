import { FC } from "react";
import "./header.component.scss";
import logo from "../../assets/images/fakestore-logo.png"

export const HeaderComponent: FC = () => {
  return (
      <header>
        <a>
          <img src={logo} alt="Fake store"/>
        </a>
        <nav>
          <ul>
            <li>
              <a>Catalogue</a>
            </li>
            <li>
              <a>Cart</a>
            </li>
            <li>
              <a>
                User
              </a>
            </li>
            <li>
              <a>
                Login
              </a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </nav>
      </header>
  );
}