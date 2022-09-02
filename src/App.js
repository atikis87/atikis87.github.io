import React, {useState,useEffect} from 'react';

import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
//import ArchivePage from './pages/Archive';
import Loading from './pages/Loading';



function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() =>
  {
    setTimeout(() =>
    {
      setIsLoading(false);
    }, 2500);
  });

  return (
    <div>
    {isLoading===true? <Loading/>:
      <Router>
        <Switch>
          <Route path="/" component={Home} exact />

        </Switch>
      </Router>
    }

    </div>
  );
}

export default App;


/*          <Route path="/archive" component={ArchivePage} exact /> */
