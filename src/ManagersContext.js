// ManagersContext.js in other words GlobalContext.js
// Provides and stores all the data in the application

import React, { useState, createContext } from "react";

// Create Context
export const ManagersContext = createContext()
export const CompaniesContext = createContext()



export function ManagersProvider({ children }) {
  const [managers, setManagers] = useState([
    {
      ID: 1,
      Name: "Alice",
      ManagerID: "",
      IsUnder: false
    },
    {
      ID: 2,
      Name: "Bob",
      ManagerID: 1,
      IsUnder: false
    },
    {
      ID: 3,
      Name: "Charlie",
      ManagerID: 1,
      IsUnder: false
    },
    {
      ID: 4,
      Name: "Dave",
      ManagerID: 2,
      IsUnder: false
    },
    {
      ID: 5,
      Name: "Eve",
      ManagerID: 3,
      IsUnder: false
    }
  ])

  const [companies, setCompanies] = useState([
    {
      ID: 1,
      Name: "HP",
      ManagerID: 1,
      Status: true,
      IsUnder: false
    },
    {
      ID: 2,
      Name: "IBM",
      ManagerID: 2,
      Status: true,
      IsUnder: false
    },
    {
      ID: 3,
      Name: "Google",
      ManagerID: 3,
      Status: true,
      IsUnder: false
    },
    {
      ID: 4,
      Name: "MySpace",
      ManagerID: 5,
      Status: false,
      IsUnder: false
    },
    {
      ID: 5,
      Name: "United",
      ManagerID: 4,
      Status: true,
      IsUnder: false
    }
  ])

  return (
    <ManagersContext.Provider value={{ managers, setManagers }}>
      <CompaniesContext.Provider value={{ companies, setCompanies }}>
        {children}
      </CompaniesContext.Provider>
    </ManagersContext.Provider>
  )
}
