import React, { useState, useEffect } from 'react';
import Layout from "./components/Layout/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Schools from "./components/Schools/Schools";
import SignupsOverview from './components/Dashboard/SignupsOverview';
import Invoices from './components/Schools/Invoices';
import Targets from './components/Dashboard/TargetsVisualization';
import { getSchools } from "./utils/data";


function App() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      const schoolsData = await getSchools();
      setSchools(schoolsData);
    };

    fetchSchools();
  }, []);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/schools"
            element={<Schools schools={schools} setSchools={setSchools} />}
          />
          <Route path="*" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signups" element={<SignupsOverview />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/targets" element={<Targets />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;