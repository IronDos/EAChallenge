import React, { useContext } from "react";
import {
  ManagersContext,
} from "./ManagersContext"

export default function SelectManager({ manager }) {
  // Use Context
  const {managers, setManagers} = useContext(ManagersContext)

  function handleSelectChange(event) {
    
    const newManagerID = event?.target?.value
    const newManagerArray = managers.map(item => {
      let newManager = {...item}
      if (item.ID == manager.ID) {
        newManager.ManagerID = newManagerID
      }
      return newManager
    })
    setManagers(newManagerArray)
  }
  
  // View
  return (
    <select
    value={manager.ManagerID}
    onChange={handleSelectChange}>
      <option key="0"></option>
      {managers.map(item => {
         if (item.ID != manager.ID){
           return (
            <option
            key={item.ID}
            value={item.ID}
            >{item.Name}</option>
          )
         }
      })}
    </select>
  )
}