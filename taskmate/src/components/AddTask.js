import React from 'react'

export const AddTask = ({taskList,setTaskList,task,setTask}) => {

  const handleAdd = (e) => {
    e.preventDefault();
    const date = new Date();

    if(task.id){
      const updatedTaskList=taskList.map((todoTask) => todoTask.id===task.id ?
            {
              id:todoTask.id,
              name:e.target.task.value,
              time:`${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
            } :todoTask )
      setTaskList(updatedTaskList);
      setTask({});
    }
    else{
        const newTask = {
          id: date.getTime(),
          name: e.target.task.value,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        }

        console.log(newTask);

        setTaskList([...taskList,newTask]);
        setTask({});
    }
   
  }
  return (
    <section className="addTask">
        <form onSubmit={handleAdd}>
            <input type='text' name='task' value={task.name || ""} placeholder='Task Name' autoComplete='off' maxLength="25" onChange={(e)=>setTask({...task,name:e.target.value})}/>
            <button type='submit'>{task.id?"Update":"Add"}</button>
        </form>
    </section>
  )
}

