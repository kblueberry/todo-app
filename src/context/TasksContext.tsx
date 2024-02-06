import { ReactNode, createContext, useState } from "react";
import { Task } from "../dtos/Task";

type TasksState = {
  tasks: Array<Task>;
  onNewTaskAdd: Function;
  onTaskAddingCancel: Function;
  onTaskRemoval: Function;
};

const initialTasksState = {
  tasks: [],
  onNewTaskAdd: () => {},
  onTaskAddingCancel: () => {},
  onTaskRemoval: () => {},
};

export const TasksContext = createContext<TasksState>(initialTasksState);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasksState, setTasksState] = useState<TasksState>(initialTasksState);

  const onNewTaskAdd = (task: Task) => {
    setTasksState((prev) => {
      const changedTasks = prev.tasks.concat([task]);
      console.log("after add: ", changedTasks);

      return { ...prev, tasks: changedTasks };
    });
  };

  const onTaskAddingCancel = (id: string) => {};

  const onTaskRemoval = (id: string) => {};

  return (
    <TasksContext.Provider
      value={{
        tasks: tasksState.tasks,
        onNewTaskAdd,
        onTaskAddingCancel,
        onTaskRemoval,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
