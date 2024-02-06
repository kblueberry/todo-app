import { ReactNode, createContext, useId, useState } from "react";
import { Task } from "../dtos/Task";
import { v4 as uuidv4 } from "uuid";

type TasksState = {
  tasks: Array<Task>;
  newTaskAdded: boolean;
  onNewTaskAdd: Function;
  onTaskAddingCancel: Function;
  onTaskRemoval: Function;
};

const initialTasksState = {
  tasks: [],
  newTaskAdded: false,
  onNewTaskAdd: () => {},
  onTaskAddingCancel: () => {},
  onTaskRemoval: () => {},
};

export const TasksContext = createContext<TasksState>(initialTasksState);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasksState, setTasksState] = useState<TasksState>(initialTasksState);
  const { tasks, newTaskAdded } = tasksState;

  const onNewTaskAdd = (taskName: string) => {
    setTasksState((prev) => {
      const changedTasks = prev.tasks.concat([
        { id: uuidv4(), name: taskName },
      ]);
      console.log("after add: ", changedTasks);

      return { ...prev, tasks: changedTasks, newTaskAdded: true };
    });
  };

  const onTaskAddingCancel = (id: string) => {};

  const onTaskRemoval = (id: string) => {};

  return (
    <TasksContext.Provider
      value={{
        tasks,
        newTaskAdded,
        onNewTaskAdd,
        onTaskAddingCancel,
        onTaskRemoval,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
