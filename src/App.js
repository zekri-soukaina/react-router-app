import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <div className="box">
      <Switch className="switch">
        <Route path="/discover/:searchtext?" component={DiscoverMoviesPage} />
        <Route path="/movie/:imdb_id" component={MoviePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
