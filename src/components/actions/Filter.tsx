import Dropdown from "react-bootstrap/Dropdown";

export default function FilterTasks() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Filter tasks
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item>Done</Dropdown.Item>
        <Dropdown.Item>Incomplete</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
