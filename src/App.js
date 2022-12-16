import React, { useState } from "react";
import data from "./data";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dash from "./Dash";
import Add from "./Add";
function App() {
  const [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Dash people={people} setPeople={setPeople} />}
            />
            <Route
              path="/Add"
              element={<Add people={people} setPeople={setPeople} />}
            />
          </Routes>
        </BrowserRouter>
      </section>
    </main>
  );
}

export default App;
