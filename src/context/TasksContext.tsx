import { ReactNode, createContext, useState } from "react";
import { Task } from "../dtos/Task";

type TasksState = {
  tasks: Array<Task>;
  onNewTaskAdd: Function;
  onTaskRemoval: Function;
};

const initialTasksState = {
  tasks: [],
  onNewTaskAdd: () => {},
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

  const onTaskRemoval = (id: string) => {
    setTasksState((prev) => {
      const changedTasks = prev.tasks.filter((task) => task.id !== id);
      console.log("after delete", changedTasks);
      return { ...prev, tasks: changedTasks };
    });
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: tasksState.tasks,
        onNewTaskAdd,
        onTaskRemoval,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
