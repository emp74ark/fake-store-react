import React from 'react';
import './App.scss';
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";

function App() {
  return (
      <>
        <HeaderComponent></HeaderComponent>
        <HomeComponent></HomeComponent>
        <FooterComponent></FooterComponent>
      </>

  );
}

export default App;
