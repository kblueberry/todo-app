import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/styles/containers.css";
import "./assets/styles/general.css";
import MainToDoContent from "./components/MainToDoContent";

function App() {
  return (
    <div className="app">
      <h1 className="app_heading">To-do list</h1>
      <MainToDoContent />
    </div>
  );
}

export default App;
