import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { routes } from "./routes/routes";

function App() {
  return (
      <BrowserRouter>
        <HeaderComponent></HeaderComponent>
        <Routes>
          {routes.map(route => (
              <Route key={route.title} path={route.path} element={route.element} />
          ))}
        </Routes>
        <FooterComponent></FooterComponent>
      </BrowserRouter>

  );
}

export default App;
