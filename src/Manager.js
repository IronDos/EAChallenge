import React, { useContext } from "react";
import SelectManager from './SelectManager'
import {
  ManagersContext,
  CompaniesContext,
} from "./ManagersContext"

export default function Manager({ manager }) {
  // Use Context
  const { managers, setManagers } = useContext(ManagersContext)
  const { companies, setCompanies } = useContext(CompaniesContext)

  function updateManagerContext(name) {
    const newManagerArray = managers.map((item) => {
      let newManager = { ...item }

      if (item.Name === manager.Name) {
        newManager.Name = name
      }

      return newManager
    })
    setManagers(newManagerArray)
  }

  function handleNameChange(event) {
    const newName = event?.target?.value
    updateManagerContext(newName)
  }

  function getEmployeesTreeAndCompanies() {
    var isUnderIDs = employeesTree(manager.ID).toString().split(",")
    const newManagerArray = managers.map((item) => {
      let newManager = { ...item }
      newManager.IsUnder = false
      for (let i = 0; i < isUnderIDs.length; i++) {
        if (isUnderIDs[i] == item.ID) {
          newManager.IsUnder = true
        }
      }
      return newManager
    })
    setManagers(newManagerArray)

    const newCompaneyArray = companies.map(item =>{
      let newCompaney = { ...item }
      newCompaney.IsUnder = false
      if (item.ManagerID == manager.ID) {
        newCompaney.IsUnder = true
      }
      return newCompaney
    })
    setCompanies(newCompaneyArray)
  }

  // Algo EmployeesTree
  function employeesTree(ID) {
    var isUnderID = []
    for (let i = 0; i < managers.length; i++) {
      if (ID == managers[i].ManagerID) {
        try {
          isUnderID.push(managers[i].ID)
          isUnderID.push(employeesTree(managers[i].ID)) 
        } catch (error) {
          console.log('Error: insert only logic vaild data(hierarchy between managers)')
        }
      }
    }
    return isUnderID
  }

  // -----Styling-----
  const isUnderStyle = {
    border: manager.IsUnder ? "4px solid #0F9D58" : "1px solid #f1f1f1",
    borderRadius: "0px",
    color: "black"
  }
  const idStyle = () => {
    for (let i = 0; i < companies.length; i++) {
      if (companies[i].ManagerID == manager.ID && companies[i].Status == true) {
        return {color: "black"}
      }
    }
    return {color: "red", fontWeight: "bold"}
  }

  // View
  return (
    <>
      <div class="grid-item" style={idStyle()}>{manager.ID}</div>
      <div class="grid-item" style={isUnderStyle}>
        <input
            type="text"
            onChange={handleNameChange}
            onClick={getEmployeesTreeAndCompanies}
            value={manager.Name}
            />
      </div>
      <div class="grid-item">
        <SelectManager key={manager.ManagerID} manager={manager}/>
      </div>
      <div class="grid-item"></div>
    </>
  )
}
