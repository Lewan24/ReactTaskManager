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
        <fieldset>
            <legend><h3>Create task</h3></legend>

            <form onSubmit={validateAndTryCreate}>
                <textarea placeholder="Example Title" className="mr-2" onChange={(e) => {setNewTaskTitle(e.target.value)}} value={newTaskTitle} />
                <button className="mb-2 btn btn-success" type="submit">[+]</button>
            </form>
        </fieldset>
        </>
    )
}

export default TasksCreateForm