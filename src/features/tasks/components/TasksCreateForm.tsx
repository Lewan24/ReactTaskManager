import { useState } from "react";

type TasksCreateFormProps = {
    onTaskCreate: (title: string) => void
}

function TasksCreateForm({onTaskCreate} : TasksCreateFormProps){
    const [newTaskTitle, setNewTaskTitle] = useState<string>("");

    function validateAndTryCreate(e: React.SyntheticEvent<HTMLFormElement>){
        e.preventDefault()

        if (newTaskTitle.length <= 0)
            return;

        onTaskCreate(newTaskTitle)
        setNewTaskTitle("")
    }

    return (
        <>
        <div className="p-4 border">
            <h1 className="text-center text-2xl mb-5">Create task</h1>

            <form onSubmit={validateAndTryCreate} className="flex justify-center">
                <textarea placeholder="Example Title" className="mr-2 max-h-15 min-h-15 text-md" onChange={(e) => {setNewTaskTitle(e.target.value)}} value={newTaskTitle} />
                <button className="btn btn-success size-16" type="submit">[+]</button>
            </form>
        </div>
        </>
    )
}

export default TasksCreateForm