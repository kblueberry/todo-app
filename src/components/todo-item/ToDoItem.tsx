import Container from "react-bootstrap/Container";
import { Task } from "../../dtos/Task";

export function ToDoItemNew() {
  return (
    <div>
      <input type="text" required={true} className=""></input>
    </div>
  );
}

export function ToDoItemView({ task }: { task: Task }) {
  return <div>{task.name}</div>;
}
