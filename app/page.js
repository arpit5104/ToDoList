"use client"
import React, { useState } from 'react'

function page() {
  const [title, setTitle]= useState("");
  const [des, setDes]= useState("");
  const [mainTask, setMainTask]= useState([]);
  function formHandle(e){
    e.preventDefault();
    setMainTask([...mainTask ,{title,des}]);
    setTitle("");
    setDes("");
    
  }
  function deleteHandler(i){
      let copyTask=[...mainTask];
      copyTask.splice(i,1);
      setMainTask(copyTask);
  }
  let renderTask=<h2>No Task Available</h2>
if(mainTask.length>0){
  renderTask= mainTask.map((t,i)=>{
    return(
      <li key={i} className='flex items-center mb-5 justify-between '>
      <div className="flex items-center justify-between mb-5 w-2/3">
        <h5 className='text-lg font-semibold'>{t.title}</h5>
        <h4 className='text-xl font-md '>{t.des}</h4>
     </div>
     <button onClick={()=>{deleteHandler(i)}} className='bg-red-400 text-grey-300 rounded font-bold p-3'>Delete</button>
    </li>
    );
  });
}
  return (
    
    <>
    <h1 className='bg-black text-white p-5 text-3xl font-bold text-center'>Arpit's To Do List</h1>
    <form onSubmit={formHandle} >
      <input type="text" placeholder='Enter Title here' className='text-2xl border-zinc-800 m-5 p-4 py-2' value={title} onChange={(e)=>{setTitle(e.target.value)}}></input>
      <input type="text" placeholder='Enter Description here' className='text-2xl border-zinc-800 m-5 p-4 py-2'
      value={des} onChange={(e)=>{setDes(e.target.value)}}></input>
      <button type='submit' className='bg-black text-white text-xl font-bold m-5 px-4 py-3 rounded'>Add Task</button>
    </form>
    <hr/>
    <div className='p-8 bg-slate-200'><ul>{renderTask}</ul></div>
    </>
  )
}

export default page