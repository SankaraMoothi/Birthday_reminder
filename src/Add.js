import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Add({ people, setPeople }) {
  const [image, setimage] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const navigate = useNavigate();
  function handleChange(event) {
    setname(event.target.value);
  }
  function handleChangeAge(event) {
    setage(event.target.value);
  }
  function handleChangeImage(event) {
    setimage(event.target.value);
  }
  return (
    <>
      <form>
        <input
          className="input"
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Enter the Name"
        />
        <input
          className="input"
          type="text"
          onChange={handleChangeImage}
          placeholder="Enter the Image"
        />
        <input
          className="input"
          type="text"
          onChange={handleChangeAge}
          placeholder="Enter the Age"
        />
        <button
          type="submit"
          onClick={function ad(e) {
            e.preventDefault();
            let newpeople = {
              id: +`${people.length + 1}`,
              name: name,
              age: age,
              image: image,
            };
            setPeople([...people, newpeople]);

            navigate("/");
          }}
        >
          Add Member
        </button>
      </form>
    </>
  );
}

export default Add;
