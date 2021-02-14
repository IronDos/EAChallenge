import React, { useContext } from "react";
import Manager from "./Manager";
import { ManagersContext } from "./ManagersContext";

export default function ManagerList() {
  // Use Context
  const { managers, setManagers } = useContext(ManagersContext)
  
  function addNewManager()
  {
    let newManager = {
      ID: managers.length+1,
      Name: "NewManager" + (managers.length+1),
      ManagerID: "",
      IsUnder: false
    }
    let newManagers = [...managers, newManager]
    setManagers(newManagers)
  }

  // View
  return (
    <>
      <div class="grid-container">
        <div class="grid-item header">ID</div>
        <div class="grid-item header">Name</div>
        <div class="grid-item header">Manager</div>
        <div class="grid-item header"></div>
        {managers.map((manager) => (
          <Manager key={manager.ID} manager={manager} />
        ))}
      </div>
      <button onClick={addNewManager}>Add New User</button>
    </>
  );
}
