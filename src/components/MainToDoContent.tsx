import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import AddTask from "./actions/AddTask";
import FilterTasks from "./actions/Filter";
import TasksList from "./TasksList";

export default function MainToDoContent() {
  return (
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
  );
}
