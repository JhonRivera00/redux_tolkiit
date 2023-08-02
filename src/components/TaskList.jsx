import { useDispatch, useSelector } from "react-redux"
import { deleteTask } from "../features/tasks/tasksSlice";
import { Link } from "react-router-dom";

function TaskList() {
const tasks = useSelector((state)=> state.task)
const dispatch = useDispatch();


const handleDelete = (id)=>{
dispatch(deleteTask(id))
}

    return (
 <>
<header>
  <h1>Task {tasks.length}</h1>
  <Link to={'/create-task'}><button>New Task</button></Link>
</header>

 {tasks.map((task) =>(
  <div key={task.id}>
    <h3>{task.title}</h3>
    <h3>{task.description}</h3>
    <button onClick={()=>handleDelete(task.id)}>Delete</button>
    <Link to={`/edit-task/${task.id}`}>Edit</Link>
  </div>
 ))}
 </>
  )
}

export default TaskList