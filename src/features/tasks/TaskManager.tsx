import { useCallback, useState } from "react"
import TasksCreateForm from "./components/TasksCreateForm"
import TasksList from "./components/TasksList"
import TasksSummary from "./components/TasksSummary"
import type { Task } from "./data/Task"

function TaskManager(){
    const [tasks, setTasks] = useState<Task[]>([])

    const createTask = useCallback((title: string) => {
        setTasks(prev => [...prev, {id: crypto.randomUUID(), title: title, completed: false}])
    }, []);

    const removeTask = useCallback((id: string) => {
        setTasks(prev => prev.filter(t => t.id !== id))
    }, [])
    
    const toggleTask = useCallback((id: string) => {
        setTasks(prev => prev.map(t => t.id === id ? {...t, completed: !t.completed} : t))
    }, [])

    // TODO: Inline (or by any other method) tasks editing
    // TODO: Save to local storage and load from local storage
    // TODO: Change css to something prettier like bootstrap or tailwind and change design of app

    return(
        <>
            <div className="p-4 shadow-md shadow-white">
                <h2 className="text-3xl text-center mb-5">Task Manager</h2>

                <TasksCreateForm onTaskCreate={createTask} />

                <TasksList tasks={tasks} onTaskDone={removeTask} onTaskToggle={toggleTask} />

                <TasksSummary tasks={tasks} />
            </div>
        </>
    )
}

export default TaskManager