import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { TasksContext } from "../../context/TasksContext";
import { Task } from "../../dtos/Task";

export function ToDoItemNew() {
  const [taskName, setTaskName] = useState<string>("");
  const { onNewTaskAdd } = useContext(TasksContext);

  const onValueChange = (event: any) => {
    setTaskName(event.target.value);
  };

  return (
    <Container>
      <Row>
        <Col>
          <Form.Control type="text" required={true} onChange={onValueChange} />
        </Col>
        <Col xs={6} md={4}>
          <Button
            variant="success"
            onClick={() => onNewTaskAdd(new Task(taskName))}
          >
            + Add task
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export function ToDoItemView({ task }: { task: Task }) {
  return <div>{task.name}</div>;
}
