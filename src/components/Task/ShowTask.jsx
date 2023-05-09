function ShowTasks(tasks, MarkComplete, DeleteTask) {
    return <>
        {tasks.map((task, index) => (
            <div className="card w-96 h-48 bg-neutral text-neutral-content p-5" key={index}>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{task.name}!</h2>
                    <p>We are using cookies for no reason.</p>
                    <div className="card-actions justify-end">
                        <button className={!task.complete ? "btn btn-primary" : "btn btn-success"}
                                onClick={() => MarkComplete(task.name)}>Hecha
                        </button>
                        <button className="btn btn-ghost" onClick={() => DeleteTask(task.name)}>Eliminar
                        </button>
                    </div>
                </div>
            </div>
        ))}
    </>;
}

export default ShowTasks
