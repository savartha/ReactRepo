import { useEffect, useState } from 'react';
import './App.css';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { ShowTask } from './components/ShowTask';
import { toHaveErrorMessage } from '@testing-library/jest-dom/dist/matchers';

function App() {
  const[taskList, setTaskList] =  useState( JSON.parse(localStorage.getItem('taskList')) || []);
  const [task,setTask] = useState({});
  const [theme,setTheme] = useState('dark');

  useEffect(()=>{
    
    document.documentElement.classList.add(theme);
  },[theme]);

  useEffect(()=>{ localStorage.setItem('taskList',JSON.stringify(taskList))},[taskList]);
  return (
    <div className="App">
     <Header />
     <AddTask  taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
     <ShowTask taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask}/>
    </div>
  );
}

export default App;
