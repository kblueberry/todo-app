import { useContext } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { TasksContext } from "../context/TasksContext";
import FilterTasks from "./actions/Filter";
import { ToDoItemNew, ToDoItemView } from "./todo-item/ToDoItem";
import Container from "react-bootstrap/Container";

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
      <Container>
        {tasks.map((task) => (
          <ToDoItemView task={task} />
        ))}
      </Container>
    </>
  );
}
