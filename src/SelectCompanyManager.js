import React, { useContext } from "react"
import {
  ManagersContext,
  CompaniesContext,
} from "./ManagersContext"

export default function SelectCompanyManager({ company }) {
  // Use Context
  const {managers, setManagers} = useContext(ManagersContext)
  const { companies, setCompanies } = useContext(CompaniesContext)

  function handleSelectChange(event) {
    const newManagerID = event?.target?.value;
    const newCompaneyArray = companies.map(item => {
      let newCompaney = { ...item }
      if (item.ID == company.ID) {
        newCompaney.ManagerID = newManagerID
      }
      return newCompaney
    })
    setCompanies(newCompaneyArray)

  }
  // Styling
  const isUnderStyle = {
    border: company.IsUnder ? "2px solid #0F9D58" : "1px solid #f1f1f1",
    borderRadius: "4px",
    color: "black"
  }

  // View
  return (
    <select
    value={company.ManagerID}
    onChange={handleSelectChange}
    style={isUnderStyle}
    disabled={!company.Status}>
      <option key="0"></option>
      {managers.map(item => (
        <option
        key={item.ID}
        value={item.ID}
        >{item.Name}</option>
      ))}
    </select>
  )
}