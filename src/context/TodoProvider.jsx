// The TodoProvider will create a wrapper for my app. So every component in my app can access to the context
import React,{useState} from 'react';
import TodoContext from './TodoContext';

export default function TodoProvider({children}) {
  // I create here the state variables that will be needed by my components
  const [todoList,setTodoList] = useState([])

  const onSubmitTodo = (e,todo,date,category,desc) => {
    e.preventDefault();
    //This is not a good thing to do
    // todoList.push();
    // setTodoList(todoList);
    //---------------------
    setTodoList((prevState)=>{
      // short approach
      // let id = prevState.length > 0 ? prevState[prevState.length-1].id + 1 : 1;
      // return [...prevState,{id,todo,date,category,desc}]
      let newTodoId=1;
      if(prevState.length > 0) {
        newTodoId = prevState.slice(-1)[0].id + 1;
      }
      // prevState.forEach((el, idx) => (newTodoId = idx ? idx + 1 : 1));
      const newTodo = {
        id:newTodoId,
        todo,
        date,
        category,
        desc
      }
      const newArray = [...prevState,newTodo];
      return newArray;
    })
  }

  const deleteTodo = (id) => {
    setTodoList((prevState)=>{
      return prevState.filter(element => element.id !== id)
    })
  }

  const getFromCategory = (category) => {
    return todoList.filter(element => element.category === category)
  }

  const providedData = {
    todoList, // -> todoList:todoList
    onSubmitTodo,
    deleteTodo,
    getFromCategory
  }

  return (
    <TodoContext.Provider value={providedData} >
      {children}
    </TodoContext.Provider>
  )
}

