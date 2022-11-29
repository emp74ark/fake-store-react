import { FC } from "react";
import "./home.component.scss";
import fakestore from "../../assets/images/fakeStoreApi.png";
import angular from "../../assets/images/angular.png";
import bg1 from "../../assets/images/pexels-andrea-piacquadio-974911.jpg"
import bg2 from "../../assets/images/pexels-karolina-grabowska-5706277.jpg";

export const HomeComponent: FC = () => {
  return (
      <>
        <section style={{backgroundImage: `url(${bg1})`}}>
          <div className="left">
            <h2>
              <a href="https://fakestoreapi.com/" target="_blank" rel="noreferrer">Fake Store API</a>
            </h2>
            <img src={fakestore} alt="Fake Store API logo"/>
          </div>
          <div className="right"></div>
        </section>
        <section style={{backgroundImage: `url(${bg2})`}}>
          <div className="right"></div>
          <div className="left">
            <h2>
              Made with <a href="https://angular.io/" target="_blank" rel="noreferrer">Angular</a>
            </h2>
            <img src={angular} alt="Angular logo"/>
          </div>
        </section>
      </>
);
}