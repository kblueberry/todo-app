import { v4 as uuidv4 } from "uuid";
export class Task {
  constructor(taskName: string) {
    this.id = uuidv4();
    this.isNew = true;
    this.name = taskName;
  }
  id: string;
  isNew: boolean;
  name: string;
}
