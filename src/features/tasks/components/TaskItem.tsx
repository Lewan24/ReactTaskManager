import { useState } from 'react'
import type { Task } from '../data/Task'
import { TrashIcon, ArrowsRightLeftIcon, PencilIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

type TaskItemProps = {
    task: Task

    onTaskDone: (id: string) => void
    onTaskToggle: (id: string) => void
    onTaskEditSave: (id: string, newTitle: string) => void
}

const TaskItem = React.memo(function TaskItem({task, onTaskDone, onTaskToggle, onTaskEditSave} : TaskItemProps){
    const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
    const [newTaskTitle, setNewTaskTitle] = useState(task.title)

    function toggleEditMode() {
        setIsEditModeEnabled(!isEditModeEnabled)
        setNewTaskTitle(task.title)
    }

    function saveNewTitle(){
        if (newTaskTitle.length <= 0)
            return;

        onTaskEditSave(task.id, newTaskTitle)
        toggleEditMode()
    }

    function RenderTitle() {
        if (isEditModeEnabled)
            return (
                <>
                <div className="relative w-full min-w-[100px]">
                    <textarea
                    className="peer h-full min-h-[60px] w-full resize-none rounded-[7px] border border-white border-t-transparent px-3 py-2.5 text-sm text-blue-gray-700 outline outline-0 transition-all focus:border-2 focus:border-green-400 focus:border-t-transparent focus:outline-0"
                    onChange={(e) => {setNewTaskTitle(e.target.value)}} value={newTaskTitle}></textarea>
                    <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-400">
                    New Title
                    </label>
                </div>
                </>
            )
        
        return <h1 className='text-xl text-center'>{task.title}</h1>
    }

    function RenderEditIcons(){
        if (isEditModeEnabled)
            return (
                <>
                <div className='flex flex-row items-center px-1 cursor-pointer
                    transision-all duration-100 
                    hover:text-[var(--color-success)] hover:scale-105
                    active:scale-95' onClick={saveNewTitle}>

                    <CheckCircleIcon className='size-8 text-[var(--color-success)]'/>

                    <p className='text-xl'>Save</p>
                </div>
                
                <div className='flex flex-row items-center px-1 cursor-pointer
                    transision-all duration-100
                    hover:scale-105 hover:text-[var(--color-error)]
                    active:scale-95' onClick={toggleEditMode}>

                    <XMarkIcon className='size-8 text-[var(--color-error)]'/>

                    <p className='text-xl'>Cancel</p>
                </div>
                </>
            )

        return(
            <>
            <TrashIcon className='size-8 text-[var(--color-error)] cursor-pointer
            transision-all duration-100 
            hover:text-[var(--color-error-light)] hover:scale-110
            active:scale-90' onClick={() => onTaskDone(task.id)} />

            <ArrowsRightLeftIcon className='size-8 text-[var(--color-primary)] cursor-pointer
            transision-all duration-100 
            hover:text-[var(--color-primary-light)] hover:scale-110
            active:scale-90' onClick={() => onTaskToggle(task.id)} />

            <PencilIcon className='size-8 text-[var(--color-warning)] cursor-pointer
            transision-all duration-100 
            hover:text-[var(--color-warning-light)] hover:scale-110
            active:scale-90' onClick={toggleEditMode}/>
            </>
        )
    }

    return(
        <>
        <div className={task.title.length >= 25 ? 'col-span-2' : ''}>
            <input value={task.id} hidden={true} disabled={true} />

            <div className='border p-2'>
                <div className='flex flex-row justify-center gap-2 mb-3'>
                    {RenderEditIcons()}
                </div>

                <h1 className={"text-xl text-center my-3 " + (task.completed ? 'text-green-300' : 'text-yellow-400')}>{task.completed ? 'Done' : 'In Work'}</h1>

                {RenderTitle()}

            </div>
        </div>
        </>
    )
})

export default TaskItem