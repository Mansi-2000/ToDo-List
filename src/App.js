import './App.css';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { Footer } from './MyComponents/Footer'; 
import { AddTodo } from './MyComponents/AddTodo';
import { About } from './MyComponents/About';
import {useState} from 'react';
import { useEffect } from 'react';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {

  let initTodo;
  if(localStorage.getItem("todos")===null){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am on delete!",todo);

    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title,desc) => {
    console.log('I am adding this todo', title, desc)
    let sno;
    if(todos.length===0){
      sno =0;
    }else{ 
     sno = todos[todos.length-1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]); 
    console.log(myTodo);    
  }

  const [todos, setTodos] = useState(initTodo);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  
  return (
  //  <h3>My App</h3>
  //  <p>My app works</p>    // Adjacent JSX elements must be wrapped in an enclosing tag. //
  // So we have to wrap elements in closong tags epmty tags will also work (<></>)

  // <>  <h3>My App</h3>
  // <p>My app works</p> 
  // </>
    <>
    <Router>
    <Header title="MyTodosList" searchBar={true}/>
    <Switch>
          <Route exact path="/" render = {()=> {
            return (
            <>
            <AddTodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete = {onDelete}/>
            </> )
          }}>
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
