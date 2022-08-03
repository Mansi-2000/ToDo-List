import React, { useState } from 'react'

export const AddTodo = (props) => {
     const [title, settitle] = useState("");
     const [desc, setdesc] = useState("")
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert('title or description cannot be blank'); 
        }else{
        props.addTodo(title, desc);
        settitle("");
        setdesc("");
        }
    }
  return (
    <div className="container my-3">
        <h3>Add a todo</h3>
        <form onSubmit={submit}>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Todo title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>{settitle(e.target.value)}} id="title" aria-describedby="emailHelp"/>
    </div>
  <div className="mb-3">
    <label htmlFor="desc" className="form-label">todo Description</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>{setdesc(e.target.value)}} id="desc"/>
  </div>
  
  <button type="submit" className="btn btn-success btn-sm">Add Todo</button>
</form>
    </div>
  )
}
