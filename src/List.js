import React from "react";

const List = ({ people, removepeople }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <div className="info">
                <h4>{name}</h4>
                <span onClick={() => removepeople(person)}>X</span>
              </div>

              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
