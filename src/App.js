import "./App.css";
import Header from "./components/Header.js";
import Home from "./components/Home.js";
import Checkout from "./components/Checkout.js";
import Login from "./components/Login.js";
// import Footer from "./components/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* <Footer/> */}

        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          {/* question: tại sao để route ở dưới cùng lại không load được trang???  */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
