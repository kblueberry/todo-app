import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { Task } from "../../dtos/Task";
import { ActionNames } from "../../enums/Actions";
import IconActionButton from "../actions/IconActionButton";
import { useContext, useState } from "react";
import { TasksContext } from "../../context/TasksContext";

export function ToDoItemNew() {
  const [taskName, setTaskName] = useState<string>("");
  const { onNewTaskAdd } = useContext(TasksContext);

  const onValueChange = (event: any) => {
    setTaskName(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col xs={12} md={8}>
          <Form.Control type="text" required={true} onChange={onValueChange} />
        </Col>
        <Col xs={4} md={4} className="column-top-spacing">
          <IconActionButton
            variant={ActionNames.ConfirmAdd}
            onClick={() => onNewTaskAdd(taskName)}
          ></IconActionButton>{" "}
          <IconActionButton
            variant={ActionNames.Cancel}
            onClick={() => {}}
          ></IconActionButton>
        </Col>
      </Row>
    </Container>
  );
}

export function ToDoItemView({ task }: { task: Task }) {
  return <div>{task.name}</div>;
}
