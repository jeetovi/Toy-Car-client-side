// src/App.js

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import Main from "./Layout/Main";
import About from "./components/Home/About";
// Your other components and imports go here

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Define your other routes here */}
          {/* Example route */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />

          <Route exact path="/main" component={Main} />

          {/* This route will catch all undefined routes and display the 404 error page */}
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
