import React from 'react';
import { HomePage } from './components/HomePage/HomePage';
import {Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Route exact path='/' component={HomePage}/>
    </div>
  );
}

export default App;
