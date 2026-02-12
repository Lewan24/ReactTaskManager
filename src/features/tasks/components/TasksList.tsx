import { useState } from "react"
import type { Task } from "../data/Task"
import TaskItem from "./TaskItem"
import TasksFormFilters from "./TasksFormFilters"
import { ETasksFilter } from "../data/ETasksFilter"

type TasksListProp = {
    tasks: Task[]

    onTaskDone: (id: string) => void
    onTaskToggle: (id: string) => void
}

function TasksList({tasks, onTaskDone, onTaskToggle} : TasksListProp){
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

        return filteredTasks.map(task => <TaskItem key={task.id} task={task} onTaskDone={onTaskDone} onTaskToggle={onTaskToggle} />)
    }

    return (
        <>
        <fieldset>
            <legend><h3>Tasks List</h3></legend>

            <TasksFormFilters onFilterChange={setFilter} />

            <div className="tasksList mt-2">
                {tasksList}
            </div>
        </fieldset>
        </>
    )
}

export default TasksList