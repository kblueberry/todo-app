import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TasksList from "./components/TasksList";
import AddTask from "./components/actions/AddTask";
import FilterTasks from "./components/actions/Filter";
import "./App.css";
import "./assets/styles/general.css";
import "./assets/styles/containers.css";

function App() {
  return (
    <div className="app">
      <h1 className="app_heading">To-do list</h1>
      <div>
        <Row className="app_top_actions">
          <Col xs={12} md={8}>
            <AddTask />
          </Col>
          <Col xs={6} md={4}>
            <FilterTasks />
          </Col>
        </Row>
        <TasksList
          tasks={[
            { id: "1", name: "task 1" },
            { id: "2", name: "task 2" },
          ]}
        />
      </div>
    </div>
  );
}

export default App;
