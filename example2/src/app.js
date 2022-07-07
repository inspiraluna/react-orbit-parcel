import React, { useEffect } from "react";
import { render } from "react-dom";

import OrbitProvider from "./OrbitProvider.js";
import Intro from "./components/intro/intro.js";
import Contents from "./components/contents/contents.js";
import Offers from "./components/offers/offers.js";
import Demands from "./components/demands/demands.js";
window.LOG = "*";

const ORBIT_DB_DEMANDS = "react-ortbitdb-demands";
//"/orbitdb/zdpuAknUxcYsKArW2d8KtBhwyLfkmADo4wpwmC8ReKy3Q5pDR/react-ortbitdb-offers";

const App = () => (
  <div> 
    <OrbitProvider>
      <Intro />
      <br />
      <h2>Contents</h2>
      <Contents />
      <h2>Offers</h2>
      <Offers />
      <h2>Demands</h2>
      <Demands />
    </OrbitProvider>
  </div>
);

render(<App />, document.getElementById("root"));
