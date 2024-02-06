import Container from "react-bootstrap/Container";
import { Task } from "../../dtos/Task";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import IconActionButton from "../actions/IconActionButton";
import { ActionNames } from "../../enums/Actions";

export function ToDoItemNew() {
  return (
    <Container>
      <Row className="app_top_actions">
        <Col xs={12} md={8}>
          <Form.Control type="text" required={true} />
        </Col>
        <Col xs={6} md={4}>
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
