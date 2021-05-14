import "./App.css";
import React from "react";
import MedicineTable from "./components/MedicineTable.js";
import LocationTable from "./components/LocationTable.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
} from "react-router-dom";

import moment from "moment";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>

          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About</Link>
          </li>

          <li>
            <Link to="/medicine">Weather today</Link>
          </li>
          
          <li>
            <Link to="/location">Weather today</Link>
          </li>


        </ul>
      </nav>

      <div className="App">
        <section>
          <Switch>

            <Route path="/about">
              <About />
            </Route>

            <Route path="/medicine">
              <h1>Weather Today</h1>
              Click at the button to reload the page and see weather today!
              <MedicineTable />
            </Route>

            <Route path="/location">
              <h1>Weather Today</h1>
              Click at the button to reload the page and see weather today!
              <LocationTable />
            </Route>


            <Route path="/">
              <h1>Home</h1>
              Welcome to our service. Please explore our site!
            </Route>

            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </section>
      </div>
    </div>
  </Router>
);
}

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
function About() {
  let location = useLocation();

  return (
    <div>
      <h2>About us</h2>
      <p>Here is the description of the service and necessary terms.</p>
    </div>
  );
}

export default App;