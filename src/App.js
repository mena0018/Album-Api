import Explorer from "./components/Explorer"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"; 
import RouteAlbumDetail from "./components/RouteAlbumDetail";

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>

        <Route exact path="/explorer">
          <Explorer />
        </Route>

        <Route exact path="/album/:id" 
          children={<RouteAlbumDetail/>}>
        </Route>

        <Route exact path="/">
          <Redirect to="/explorer" />
        </Route>

      </Switch>
    </Router>

    </div>
  );
}

export default App;
