import { ReactNode, createContext, useState } from "react";
import { Task } from "../dtos/Task";

type TasksState = {
  tasks: Array<Task>;
  onNewTaskAdd: Function;
  onTaskRemoval: Function;
  onTaskStatusChange: Function;
  onTasksFiltering: Function;
};

const initialTasksState = {
  tasks: [],
  onNewTaskAdd: () => {},
  onTaskRemoval: () => {},
  onTaskStatusChange: () => {},
  onTasksFiltering: () => {},
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
      return { ...prev, tasks: changedTasks };
    });
  };

  const onTaskStatusChange = (taskId: string) => {
    const taskToChange = tasksState.tasks.find((task) => task.id === taskId);
    if (taskToChange) {
      taskToChange.completed = !taskToChange.completed;
      console.log("changed status: ", taskToChange);
    }

    setTasksState((prev) => {
      return { ...prev, tasks: [...prev.tasks] };
    });
  };

  const onTasksFiltering = () => {
    console.log("filter");
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: tasksState.tasks,
        onNewTaskAdd,
        onTaskRemoval,
        onTaskStatusChange,
        onTasksFiltering,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};
