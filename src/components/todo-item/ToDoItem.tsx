import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Task } from "../../dtos/Task";
import { ActionNames } from "../../enums/Actions";
import IconActionButton from "../actions/IconActionButton";

export function ToDoItemNew() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <Form.Control type="text" required={true} />
        </Col>
        <Col xs={4} md={4}>
          <IconActionButton variant={ActionNames.ConfirmAdd}></IconActionButton>{" "}
          <IconActionButton variant={ActionNames.Cancel}></IconActionButton>
        </Col>
      </Row>
    </Container>
  );
}

export function ToDoItemView({ task }: { task: Task }) {
  return <div>{task.name}</div>;
}
