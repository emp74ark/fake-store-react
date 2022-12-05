import React from 'react';
import {HashRouter, Route, Routes} from 'react-router-dom';
import './App.scss';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {appRoutes} from './routes/routes';
import {AuthContextProvider, CartContextProvider} from './context/provider';

function App() {
  return (
      <AuthContextProvider>
        <HashRouter>
          <HeaderComponent/>
          <CartContextProvider>
            <main>
              <Routes>
                {appRoutes.map(route => (
                    <Route key={route.title} path={route.path} element={route.element}/>
                ))}
              </Routes>
            </main>
          </CartContextProvider>
          <FooterComponent/>
        </HashRouter>
      </AuthContextProvider>

  );
}

export default App;
