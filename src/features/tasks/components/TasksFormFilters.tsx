import React from "react"
import { ETasksFilter } from "../data/ETasksFilter"

type TasksFormFiltersProps = {
    currentFilter: ETasksFilter

    onFilterChange: (filter: ETasksFilter) => void
}

const TasksFormFilters = React.memo(function TasksFormFilters({currentFilter, onFilterChange} : TasksFormFiltersProps){
    function getFilterBtnClassDependingOnFilter(filter: ETasksFilter) : string{
        const isActiveFilter = currentFilter === filter
        let defaultClasses = "btn cursor-pointer"
        return isActiveFilter ? defaultClasses + " btn-selected" : defaultClasses
    }

    return (
        <>
        <div className="border p-2">
            <h1 className="text-center text-xl">Filter</h1>
            <div className="flex flex-row gap-4 justify-center">
                <button className={getFilterBtnClassDependingOnFilter(ETasksFilter.All)} onClick={() => onFilterChange(ETasksFilter.All)}>All</button>
                <button className={getFilterBtnClassDependingOnFilter(ETasksFilter.Done)} onClick={() => onFilterChange(ETasksFilter.Done)}>Done</button>
                <button className={getFilterBtnClassDependingOnFilter(ETasksFilter.Active)} onClick={() => onFilterChange(ETasksFilter.Active)}>WIP</button>
            </div>
        </div>
        </>
    )
})

export default TasksFormFilters