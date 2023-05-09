import './App.css'
import {useState} from "react";
import ShowTasks from "./components/Task/ShowTask.jsx";
import AddTask from "./components/Task/AddTask.jsx";

function App() {
    const [name, setName] = useState("")
    const [tasks, setTasks] = useState([])

    function CreateTask() {
        setTasks([...tasks, {name, complete: false}]);
    }

    function MarkComplete(name) {
        setTasks(
            tasks.map(task =>
                task.name === name
                    ? {...task, complete : true}
                    : task
            ))
    }

    function DeleteTask(name) {
        const newItems = tasks.filter(task => task.name !== name)
        setTasks(newItems)
    }

    return (
        <div className={'h-screen'}>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
            </div>
            <div className={"flex flex-col items-center"}>
                {AddTask(name, setName, CreateTask)}
            </div>
            <div className={"flex h-screen justify-evenly pt-5"}>
                {ShowTasks(tasks, MarkComplete, DeleteTask)}
            </div>
        </div>
    )
}

export default App
