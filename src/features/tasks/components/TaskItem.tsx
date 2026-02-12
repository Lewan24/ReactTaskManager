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
            
            <fieldset>
                <legend className='text-start'>
                    {task.title} - <span className={task.completed ? 'text-taskDone' : 'text-taskInWork'}>{task.completed ? 'Done' : 'In Work'}</span></legend>

                <div>
                    <button className='mr-2 btn btn-error' onClick={() => onTaskDone(task.id)}>Remove</button>
                    <button className='btn btn-edit' onClick={() => onTaskToggle(task.id)}>Toggle</button>
                </div>
            </fieldset>
        </div>
        </>
    )
}

export default TaskItem