import { FC } from "react";
import "./footer.component.scss";
import ghLogo from "../../assets/images/github.png";

export const FooterComponent: FC = () => {
  return (
    <footer>
      <ul>
        <li>
          <a href="https://github.com/emp74ark/" target="_blank" rel="noreferrer">
            <img src={ghLogo} alt="GitHub logo"/>
            <span>emp74ark</span>
          </a>
        </li>
      </ul>
    </footer>
  );
}