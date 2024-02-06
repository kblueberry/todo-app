import { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { TasksContext } from "../context/TasksContext";
import TasksList from "./TasksList";
import FilterTasks from "./actions/Filter";
import { ToDoItemNew } from "./todo-item/ToDoItem";

export default function MainToDoContent() {
  const { tasks } = useContext(TasksContext);

  return (
    <>
      <Row className="app_top_actions">
        <Col xs={12} md={12} className="column-top-spacing">
          <FilterTasks />
        </Col>
      </Row>
      <ToDoItemNew />
      <TasksList tasks={tasks} />
    </>
  );
}
