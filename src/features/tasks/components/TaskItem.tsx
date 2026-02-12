import type { Task } from '../data/Task'

type TaskItemProps = {
    task: Task

    onTaskDone: (id: string) => void
    onTaskToggle: (id: string) => void
}

function TaskItem({task, onTaskDone, onTaskToggle} : TaskItemProps){
    return(
        <>
        <div>
            <input value={task.id} hidden={true} disabled={true} />
            
            <div className='border p-2 max-w-50'>
                <h1 className='text-xl text-center'>
                    {task.title} - <span className={task.completed ? 'text-green-300' : 'text-yellow-400'}>{task.completed ? 'Done' : 'In Work'}</span></h1>

                <div className='flex flex-row justify-center'>
                    <button className='mr-2 btn btn-error btn-sm' onClick={() => onTaskDone(task.id)}>Remove</button>
                    <button className='btn btn-sm' onClick={() => onTaskToggle(task.id)}>Toggle</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default TaskItem