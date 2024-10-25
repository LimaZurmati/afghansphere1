import styles from "./App.module.css";
import NavBar from "./components/NavBar";
import Container from "react-bootstrap/Container";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
        <h1>Home page</h1>
        <h1>Sign In</h1>
        </Switch>
      </Container>
    </div>
  );
}

export default App;