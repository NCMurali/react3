import React from 'react';
import NavBar from './NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ApplicationsPage from './ApplicationsPage';
import CatalogPage from './CatalogPage';
import PipelinesPage from './PipelinesPage';
import LineagePage from './LineagePage';
import AlertsPage from './AlertsPage';

import 'bootstrap/dist/css/bootstrap.css';
// Import other page components here

const App = () => {
  const userName = 'John Doe';

  return (
    <Router>
      <div>
        <NavBar userName={userName} />
        <div className="container">
          <Routes>
          <Route exact path="/applications" element={<ApplicationsPage/>}/>
          <Route exact path="/catalog" element={<CatalogPage/>}/>
          <Route exact path="/pipelines" element={<PipelinesPage/>}/>
          <Route exact path="/lineage" element={<LineagePage/>}/>
          <Route exact path="/alerts" element={<AlertsPage/>}/>
            {/* Add routes for other pages here */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
