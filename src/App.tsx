import React from 'react';
import './App.css';
import AppHeader from './components/AppHeader/AppHeader';
import BurgerConstructor from './components/BurgerConstructor/BurgerConstructor'
import 'overlayscrollbars/overlayscrollbars.css';

function App() {
  return (
    <div className="App">
      
        <AppHeader/>
        <BurgerConstructor />
       
      
    </div>
  );
}

export default App;
