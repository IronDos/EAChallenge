import React, { useContext } from "react";
import {
  CompaniesContext,
} from "./ManagersContext";
import SelectCompanyManager from './SelectCompanyManager'

export default function Company({ company }) {
  // Use Context
  const { companies, setCompanies } = useContext(CompaniesContext)

  function handleStatusToggle() {
    const newCompaniesArray = companies.map((item) => {
      let newCompany = {...item}
      if (item.ID == company.ID) {
        if (company.Status == true) {
          newCompany.Status = false 
        } else {newCompany.Status = true }
      }
      return newCompany
    })
    setCompanies(newCompaniesArray)
  }

  function handleNameChange(event) {
    const newName = event?.target?.value
    const newCompanyArray = companies.map(item => {
      let newCompany = { ...item }
      if (item.ID == company.ID) {
        newCompany.Name = newName
      }
      return newCompany
    })
    setCompanies(newCompanyArray)
  }

  // View
  return (
    <>
        <div class="grid-item" onDoubleClick={handleStatusToggle} disabled={!company.Status}>
          {company.ID}
        </div>
        <div class="grid-item" onDoubleClick={handleStatusToggle} disabled={!company.Status}>
          <input 
            type="text"
            onChange={handleNameChange}
            value={company.Name}
            style={{border: "none"}}
            disabled={!company.Status}
          />
        </div>
        <div class="grid-item" onDoubleClick={handleStatusToggle} disabled={!company.Status}>
          <SelectCompanyManager key={company.ManagerID} company={company} />
        </div>
        <div class="grid-item" onDoubleClick={handleStatusToggle} disabled={!company.Status}>
          {company.Status ? "active" : "closed"}
        </div>
    </>
  )
}
