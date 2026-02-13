import type { Task } from "../data/Task"

type TasksSummaryProps = {
    tasks: Task[]
}

function TasksSummary({tasks} : TasksSummaryProps){
    const activeTasks = tasks.filter(t => !t.completed).length

    return (
        <>
        <p className="text-end text-xl mt-10">Active tasks: <span className="text-green-400">{activeTasks}</span></p>
        </>
    )
}

export default TasksSummary