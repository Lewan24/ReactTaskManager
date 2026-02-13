import { useState } from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid";

type TasksCreateFormProps = {
    onTaskCreate: (title: string) => void
}

function TasksCreateForm({onTaskCreate} : TasksCreateFormProps){
    const [newTaskTitle, setNewTaskTitle] = useState<string>("");

    function validateAndTryCreate(){
        if (newTaskTitle.length <= 0)
            return;

        onTaskCreate(newTaskTitle)
        setNewTaskTitle("")
    }

    return (
        <>
        <div className="p-4 border">
            <h1 className="text-center text-2xl mb-5">Create task</h1>

            <form onSubmit={validateAndTryCreate} className="flex justify-center items-center">
                <div className="relative w-full min-w-[200px]">
                    <textarea
                    className="peer h-full min-h-[60px] w-full resize-none rounded-[7px] border border-white border-t-transparent px-3 py-2.5 text-sm text-blue-gray-700 outline outline-0 transition-all focus:border-2 focus:border-green-400 focus:border-t-transparent focus:outline-0"
                    placeholder=" " onChange={(e) => {setNewTaskTitle(e.target.value)}} value={newTaskTitle}></textarea>
                    <label
                    className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-white transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-white before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-white after:transition-all peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-400 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-400 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-400">
                    Task Title
                    </label>
                </div>
                <PlusCircleIcon className="size-12 text-[var(--color-success)] cursor-pointer
                trasition-all duration-200
                hover:text-[var(--color-success-light)] hover:scale-110
                active:scale-90" onClick={validateAndTryCreate}/>
            </form>
        </div>
        </>
    )
}

export default TasksCreateForm