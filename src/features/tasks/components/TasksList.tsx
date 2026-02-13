import { useState } from "react"
import type { Task } from "../data/Task"
import TaskItem from "./TaskItem"
import TasksFormFilters from "./TasksFormFilters"
import { ETasksFilter } from "../data/ETasksFilter"

type TasksListProp = {
    tasks: Task[]

    onTaskDone: (id: string) => void
    onTaskToggle: (id: string) => void
    onTaskEditSave: (id: string, newTitle: string) => void
}

function TasksList({tasks, onTaskDone, onTaskToggle, onTaskEditSave} : TasksListProp){
    const [filter, setFilter] = useState<ETasksFilter>(ETasksFilter.All)
    const tasksList = getFilteredTasksList()

    function getFilteredTasksList(){
        let filteredTasks: Task[]

        switch(filter) {
            case ETasksFilter.Active:
                filteredTasks = tasks.filter(t => !t.completed)
                break;
            case ETasksFilter.Done:
                filteredTasks = tasks.filter(t => t.completed)
                break;

            case ETasksFilter.All:
            default:
                filteredTasks = tasks
                break;
        }

        return filteredTasks.map(task => <TaskItem key={task.id} task={task} onTaskDone={onTaskDone} onTaskToggle={onTaskToggle} onTaskEditSave={onTaskEditSave} />)
    }

    return (
        <>
        <div className="max-w-120">
            <h1 className="text-center text-2xl my-5">Tasks List</h1>

            <TasksFormFilters currentFilter={filter} onFilterChange={setFilter} />

            <div className="mt-10 flex flex-wrap gap-4 grid grid-cols-2 grid-flow-row-dense">
                {tasksList}
            </div>
        </div>
        </>
    )
}

export default TasksList