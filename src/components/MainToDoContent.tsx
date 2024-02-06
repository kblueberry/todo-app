import { useContext } from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { TasksContext } from "../context/TasksContext";
import FilterTasksAction from "./actions/FilterTasksAction";
import { ToDoItemNew, ToDoItemView } from "./todo-item/ToDoItem";

export default function MainToDoContent() {
  const { tasks } = useContext(TasksContext);

  return (
    <>
      <Row className="app_top_actions">
        <Col xs={5} md={5}>
          <FilterTasksAction />
        </Col>
      </Row>
      <ToDoItemNew />
      <Container className="todos-container">
        <h2>Todos</h2>
        {!tasks.length && <i>No todos at the moment</i>}
        {tasks.map((task) => (
          <ToDoItemView task={task} />
        ))}
      </Container>
    </>
  );
}
