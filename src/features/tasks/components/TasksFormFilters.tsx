import { ETasksFilter } from "../data/ETasksFilter"

type TasksFormFiltersProps = {
    onFilterChange: (filter: ETasksFilter) => void
}

function TasksFormFilters({onFilterChange} : TasksFormFiltersProps){
    return (
        <>
        <div className="tasksFilterMain">
            <div className="tasksFilterInner">
                <h3><strong>Filter</strong></h3>
                <div>
                    <button className="btn btn-classic mr-2" onClick={() => onFilterChange(ETasksFilter.All)}>All tasks</button>
                    <button className="btn btn-classic mr-2" onClick={() => onFilterChange(ETasksFilter.Done)}>Only done</button>
                    <button className="btn btn-classic" onClick={() => onFilterChange(ETasksFilter.Active)}>Only in work</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default TasksFormFilters