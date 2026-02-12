import { useCallback } from "react"
import { ETasksFilter } from "../data/ETasksFilter"

type TasksFormFiltersProps = {
    currentFilter: ETasksFilter

    onFilterChange: (filter: ETasksFilter) => void
}

function TasksFormFilters({currentFilter, onFilterChange} : TasksFormFiltersProps){
    function getFilterBtnClassDependingOnFilter(filter: ETasksFilter) : string{
        const isActiveFilter = currentFilter === filter
        return isActiveFilter ? "btn btn-selected" : "btn"
    }

    return (
        <>
        <div className="border p-2">
            <h1 className="text-center text-xl">Filter</h1>
            <div className="flex flex-row gap-4 justify-center">
                <button className={getFilterBtnClassDependingOnFilter(ETasksFilter.All)} onClick={() => onFilterChange(ETasksFilter.All)}>All tasks</button>
                <button className={getFilterBtnClassDependingOnFilter(ETasksFilter.Done)} onClick={() => onFilterChange(ETasksFilter.Done)}>Only done</button>
                <button className={getFilterBtnClassDependingOnFilter(ETasksFilter.Active)} onClick={() => onFilterChange(ETasksFilter.Active)}>Only in work</button>
            </div>
        </div>
        </>
    )
}

export default TasksFormFilters