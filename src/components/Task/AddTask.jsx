function AddTask(name, setName, CreateTask) {
    return <div className={"pt-5"}>
        <h1 className={"text-3xl"}>Lista de tareas</h1>
        <div className={"form-control pt-5"}>
            <input type="text" placeholder="Nombre de la tarea..." className="input w-full max-w-xs" value={name}
                   onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className={"form-control pt-2 flex-row justify-evenly"}>
            <button className="btn btn-primary" onClick={() => CreateTask()}>Agregar</button>
        </div>
    </div>;
}

export default AddTask
