import React, { useContext } from "react"
import { CompaniesContext } from "./ManagersContext"
import Company from "./Company"

export default function CompanyList() {
  // Use Context
  const { companies, setCompanies } = useContext(CompaniesContext);

  function addNewCompany()
  {
    let newCompany = {
      ID: companies.length+1,
      Name: "NewCompany" + (companies.length+1),
      ManagerID: "",
      Status: false,
      IsUnder: false      
    }
    let newCompanies = [...companies, newCompany]
    setCompanies(newCompanies)
  }

  // View
  return (
    <>
      <div class="grid-container">
        <div class="grid-item header">ID</div>
        <div class="grid-item header">Name</div>
        <div class="grid-item header">Account Manager</div>
        <div class="grid-item header">Status</div>
        {companies.map((company) => (
            <Company key={company.ID} company={company} />
        ))}
      </div>
      <button onClick={addNewCompany}>Add New Company</button>
    </>
    

  );
}
