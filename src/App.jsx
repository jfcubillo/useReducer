import './App.css'
import {useState} from "react";
import ShowTasks from "./components/Task/ShowTask.jsx";
import AddTask from "./components/Task/AddTask.jsx";
import Navbar from "./components/Navbar.jsx";


function DisplayLastTask({lastTask, setLastTask}) {
    return <>
        {lastTask && (
            <div className={"flex justify-center"}>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <div className="card-actions justify-end">
                            <button className="btn btn-square btn-sm" onClick={() => setLastTask(null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
                                     viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                          d="M6 18L18 6M6 6l12 12"/>
                                </svg>
                            </button>
                        </div>
                        <p>{lastTask}</p>
                    </div>
                </div>
            </div>
        )}
    </>;
}

function App() {
    const [name, setName] = useState("")
    const [tasks, setTasks] = useState([])
    const [tasksCount, setTaskCount] = useState(0)
    const [lastTask, setLastTask] = useState(null)

    function CreateTask() {
        setTaskCount(tasksCount + 1)
        setTasks([...tasks, {name, complete: false}]);
        setLastTask(name)
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
        setTaskCount(tasksCount - 1)
        const newItems = tasks.filter(task => task.name !== name)
        setTasks(newItems)
    }

    return (
        <div className={'h-screen'}>
            <Navbar tasksCount={tasksCount}/>
            <DisplayLastTask lastTask={lastTask} setLastTask={setLastTask}/>
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
