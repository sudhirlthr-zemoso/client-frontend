import React from 'react';
import './App.css';
import ProductTemplate from './components/templates/store-ProductTemplate';
import { BrowserRouter, Route } from "react-router-dom";
import interceptors from './utils/store-Interceptor';
import login from './components/molecules/store-LoginMolecule';

function App() {
  return (
    <div className="App">
      <header >
        <BrowserRouter>
          <Route exact path="/login" component={login} />
          <Route exact path="/" component={ProductTemplate} />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
