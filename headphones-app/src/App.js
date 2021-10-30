import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import HeadphonesPage from "./components/HeadphonesPage";
import OutletPage from "./components/OutletPage";
import SalePage from "./components/SalePage";
import SpeakersPage from "./components/SpeakersPage";
import ErrorPage from "./components/ErrorPage";
import AsideRight from "./components/AsideRight";

function App() {
  return (
    <section className="main-container">
      <section className="blur-container">
        <Router>
          <Header />
          <AsideRight/>
          <Switch>
            <Route exact path="/" component={HeadphonesPage} />
            <Route path="/outlet" component={OutletPage} />
            <Route path="/sale" component={SalePage} />
            <Route path="/speakers" component={SpeakersPage} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </section>
    </section>
  );
}

export default App;
