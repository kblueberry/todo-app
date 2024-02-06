import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { TasksContext } from "../../context/TasksContext";
import { Task } from "../../dtos/Task";
import { ActionNames } from "../../enums/Actions";
import IconActionButton from "../actions/IconActionButton";

export function ToDoItemNew() {
  const [taskName, setTaskName] = useState<string>("");
  const { onNewTaskAdd } = useContext(TasksContext);

  const onValueChange = (event: any) => {
    setTaskName(event.target.value);
  };

  return (
    <Row>
      <Col xs={7} md={10}>
        <Form.Control type="text" required={true} onChange={onValueChange} />
      </Col>
      <Col xs={5} md={2}>
        <Button
          variant="success"
          onClick={() => onNewTaskAdd(new Task(taskName))}
        >
          + Add task
        </Button>
      </Col>
    </Row>
  );
}

export function ToDoItemView({ task }: { task: Task }) {
  return (
    <Row className="item-box item-round-border">
      <Col xs={7} md={10}>
        {task.name}
      </Col>
      <Col xs={5} md={2}>
        <div className="row-flex">
          <Form.Check inline name="done" type="checkbox" id="done-action" />
          <IconActionButton variant={ActionNames.Delete} onClick={() => {}} />
        </div>
      </Col>
    </Row>
  );
}
