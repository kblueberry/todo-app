import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Task } from "../dtos/Task";
import { ActionNames } from "../enums/Actions";
import IconActionButton from "./actions/IconActionButton";
import { ToDoItemView } from "./todo-item/ToDoItem";

export default function TasksList({ tasks }: { tasks: Array<Task> }) {
  return (
    <Container>
      {tasks.map((task) => (
        <Row key={task.id} className="item-box item-round-border">
          <Col xs={10} md={10}>
            <ToDoItemView task={task} />
          </Col>
          <Col xs={2} md={2}>
            <div className="row-flex">
              <Form.Check inline name="done" type="checkbox" id="done-action" />
              <IconActionButton variant={ActionNames.Delete} />
            </div>
          </Col>
        </Row>
      ))}
    </Container>
  );
}
