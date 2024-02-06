import { useContext, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import TasksList from "./TasksList";
import AddTask from "./actions/AddTask";
import FilterTasks from "./actions/Filter";
import { ToDoItemNew } from "./todo-item/ToDoItem";
import { TasksContext } from "../context/TasksContext";

export default function MainToDoContent() {
  const [showAddNewTask, setShowAddNewTask] = useState<boolean>(false);
  const { tasks } = useContext(TasksContext);

  const addNewTask = () => {
    setShowAddNewTask(true);
  };

  return (
    <>
      <Row className="app_top_actions">
        <Col xs={12} md={8}>
          <AddTask onAdd={addNewTask} />
        </Col>
        <Col xs={6} md={4} className="column-top-spacing">
          <FilterTasks />
        </Col>
      </Row>
      {showAddNewTask && <ToDoItemNew />}
      <TasksList tasks={tasks} />
    </>
  );
}
