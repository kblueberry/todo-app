import { ReactNode, createContext, useState } from "react";
import { Task } from "../dtos/Task";
import { FilterCriteria } from "../enums/Actions";

type TasksState = {
  tasks: Array<Task>;
  initialTasks: Array<Task>;
  onNewTaskAdd: Function;
  onTaskRemoval: Function;
  onTaskStatusChange: Function;
  onTasksFiltering: Function;
};

const initialTasksState = {
  tasks: [],
  initialTasks: [],
  onNewTaskAdd: () => {},
  onTaskRemoval: () => {},
  onTaskStatusChange: () => {},
  onTasksFiltering: () => {},
};

export const TasksContext = createContext<TasksState>(initialTasksState);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
  const [tasksState, setTasksState] = useState<TasksState>({
    ...initialTasksState,
    initialTasks: initialTasksState.tasks,
  });

  const onNewTaskAdd = (task: Task) => {
    setTasksState((prev) => {
      const changedTasks = prev.tasks.concat([task]);
      return { ...prev, tasks: changedTasks, initialTasks: changedTasks };
    });
  };

  const onTaskRemoval = (id: string) => {
    setTasksState((prev) => {
      const changedTasks = prev.tasks.filter((task) => task.id !== id);
      return { ...prev, tasks: changedTasks, initialTasks: changedTasks };
    });
  };

  const onTaskStatusChange = (taskId: string) => {
    const taskToChange = tasksState.tasks.find((task) => task.id === taskId);
    if (taskToChange) {
      taskToChange.completed = !taskToChange.completed;
    }

    setTasksState((prev) => {
      const tasksCopy = [...prev.tasks];
      return { ...prev, tasks: tasksCopy, initialTasks: tasksCopy };
    });
  };

  const onTasksFiltering = (filterOption: string) => {
    let filtered = [];

    if (filterOption === FilterCriteria.All) {
      setTasksState((prev) => {
        return { ...prev, tasks: prev.initialTasks };
      });
    } else if (filterOption === FilterCriteria.Done) {
      setTasksState((prev) => {
        filtered = [...prev.initialTasks].filter((task) => task.completed);
        return { ...prev, tasks: filtered };
      });
    } else {
      setTasksState((prev) => {
        filtered = [...prev.initialTasks].filter((task) => !task.completed);
        return { ...prev, tasks: filtered };
      });
    }
  };

  return (
    <TasksContext.Provider
      value={{
        tasks: tasksState.tasks,
        initialTasks: tasksState.initialTasks,
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
