import React from 'react';
import { HomePage } from './components/HomePage/HomePage';
import {Route} from 'react-router-dom';
import DetailPage from './components/DetailPage/DetailPage';


function App() {
  return (
    <div className="App">
        <Route exact path='/' component={HomePage}/>
        <Route path='/news-detail' component={DetailPage}/>
    </div>
  );
}

export default App;
