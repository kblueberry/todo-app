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
        <Form.Control
          type="text"
          placeholder="Add task to the list"
          value={taskName}
          required={true}
          onChange={onValueChange}
        />
      </Col>
      <Col xs={5} md={2}>
        <Button
          variant="success"
          onClick={() => {
            onNewTaskAdd(new Task(taskName));
            setTaskName("");
          }}
          disabled={!taskName}
        >
          + Add task
        </Button>
      </Col>
    </Row>
  );
}

export function ToDoItemView({ task }: { task: Task }) {
  const { onTaskRemoval, onTaskStatusChange } = useContext(TasksContext);

  return (
    <Row
      className={`todo-container todo-container-rounded todo-container-y-spacing ${
        task.completed ? "todo-done" : ""
      }`}
    >
      <Col xs={7} md={10}>
        {task.name}
      </Col>
      <Col xs={5} md={2}>
        <div className="row-flex">
          <Form.Check
            inline
            name="done"
            type="checkbox"
            id="done-action"
            onChange={(event) => {
              console.log("check box event: ", event);
              onTaskStatusChange(task.id);
            }}
          />
          <IconActionButton
            variant={ActionNames.Delete}
            onClick={() => onTaskRemoval(task.id)}
          />
        </div>
      </Col>
    </Row>
  );
}
