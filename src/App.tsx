import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { routes } from "./routes/routes";
import "./App.scss";
import { AuthContextProvider } from "./context/provider";

function App() {
  return (
      <AuthContextProvider>
        <BrowserRouter>
          <HeaderComponent></HeaderComponent>
          <main>
            <Routes>
              {routes.map(route => (
                  <Route key={route.title} path={route.path} element={route.element}/>
              ))}
            </Routes>
          </main>
          <FooterComponent></FooterComponent>
        </BrowserRouter>
      </AuthContextProvider>

  );
}

export default App;
