import { MouseEventHandler } from "react";
import Button from "react-bootstrap/Button";

export default function AddTask({
  onAdd,
}: {
  onAdd: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Button variant="primary" onClick={onAdd}>
      + Add task
    </Button>
  );
}
