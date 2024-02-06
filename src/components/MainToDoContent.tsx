import { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Task } from "../dtos/Task";
import TasksList from "./TasksList";
import AddTask from "./actions/AddTask";
import FilterTasks from "./actions/Filter";
import { ToDoItemNew } from "./todo-item/ToDoItem";

export default function MainToDoContent() {
  const [toDoTasks, setToDoTasks] = useState<Array<Task>>([]);
  const [newTaskAdded, setNewTaskAdded] = useState<boolean>(false);

  const addNewTask = () => {
    setNewTaskAdded(true);
  };

  return (
    <>
      <Row className="app_top_actions">
        <Col xs={12} md={8}>
          <AddTask onAdd={addNewTask} />
        </Col>
        <Col xs={6} md={4}>
          <FilterTasks />
        </Col>
      </Row>
      {newTaskAdded && <ToDoItemNew />}
      <TasksList tasks={toDoTasks} />
    </>
  );
}
