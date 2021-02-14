import React from "react"
import ManagerList from "./ManagerList"
import { ManagersProvider } from "./ManagersContext"
import CompanyList from './CompanyList'
import './App.css'

function App() {
  return (
      <ManagersProvider>
        <ManagerList />
        <br /><br />
        <CompanyList />
      </ManagersProvider>
  );
}

export default App;
