import React from 'react'

export const ShowTask = ({taskList,setTaskList,task,setTask}) => {

  const handleClearAll= () =>{
    setTaskList([]);
  }

  const handleEdit =(id)=>{
      setTask(taskList.find((todoTask) => todoTask.id===id ));
  }

  const handleDelete = (id) =>{
    const updatedTaskList = taskList.filter((taskObj)=> taskObj.id!==id);
    setTaskList(updatedTaskList);
  }
 
  return (
    <section className="showTask">
        <div className="head">
            <div>
              <span className="title">Todo</span>
              <span className="count">{taskList.length}</span>
            </div>
            <button className="clearAll" onClick={handleClearAll}>Clear All</button>
        </div>
        <ul>
          {taskList.map((todoTask) => 
             <li key={todoTask.id}>
             <p>
                 <span className="name">{todoTask.name}</span>
                 <span className="time">{todoTask.time}</span>
             </p>
             <i className='bi bi-pencil-square' onClick={()=>handleEdit(todoTask.id)}></i>
             <i className='bi bi-trash' onClick={() => handleDelete(todoTask.id)}></i>
         </li>

          )}
           
        </ul>
        

    </section>
  )
}
