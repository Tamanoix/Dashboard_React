import React from 'react';
import './App.css';
import DashboardEmployees from './Pages/DashboardEmployees/DashboardEmployees';
import DashboardFinance from './Pages/DashboardFinance/DashboardFinance';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import DashboardContextProvider from './context/DashboardContext';


const App = () => {
  return (
    <DashboardContextProvider>
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardFinance />} />
        <Route path="/dashboardEmployees" element={<DashboardEmployees />} />
      </Routes>
    </DashboardContextProvider>
  );
};

export default App;
