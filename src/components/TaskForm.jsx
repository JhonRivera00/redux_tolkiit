import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, updateTask } from "../features/tasks/tasksSlice"
import {v4 as uuid} from 'uuid'
import { useNavigate, useParams } from "react-router-dom"

function TaskForm() {
  const [task, setTask] = useState({
    title:'',
    description:''
  })

const dispatch = useDispatch()
const navigate = useNavigate()
const params = useParams()
const tasks = useSelector((state)=> state.task)

  const handleChange = e =>{
    setTask({...task, [e.target.name]:e.target.value})
    
  }

  const handleSubmit = e =>{
    e.preventDefault();
    if(params.id){
      dispatch(updateTask(task))
    }else{
      dispatch(addTask({...task, id : uuid()}))

    }
    navigate('/')
  }

  useEffect(() => {
   if(params.id){
    setTask(tasks.find(task => task.id === params.id))
   }
  }, [])
  
  return (
    <form onSubmit={handleSubmit}>
      <input  name='title' type="text" value={task.title} placeholder="title" onChange={handleChange}/>
      <textarea name="description" cols={30} value={task.description} placeholder="description" onChange={handleChange}/>
      <button type="submit">Save</button>
    </form>
  )
}

export default TaskForm