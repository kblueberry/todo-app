import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/styles/containers.css";
import MainToDoContent from "./components/MainToDoContent";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid="sm">
      <h1 className="app_heading">To-do list</h1>
      <MainToDoContent />
    </Container>
  );
}

export default App;
