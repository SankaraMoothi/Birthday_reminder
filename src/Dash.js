import React from "react";
import { useNavigate } from "react-router-dom";
import List from "./List";
function Dash({ people, setPeople }) {
  let removepeople = (item) => {
    let id = people.findIndex((obj) => obj.id === item.id);
    people.splice(id, 1);
    setPeople([...people]);
  };
  const navigate = useNavigate();
  return (
    <>
      <h3>{people.length} birthdays today</h3>
      <List people={people} removepeople={removepeople} />
      <button onClick={() => setPeople([])}>Clear all</button>
      <button onClick={() => navigate("Add")}>Add One</button>
    </>
  );
}

export default Dash;
