import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [ usersTodoList, setUsersTodoList ] = useState([])
  const [ todoList, setTodoList] = useState([])

  useEffect(()=>{
    fetch("http://127.0.0.1:5050/todos").then(res=>res.json()).then(data=>{
      const dataUserIds = data.map(todo=>todo.userId)
      const nonDuplicatedUserIds = data.filter((todo,index)=> dataUserIds.indexOf(todo.userId) === index)
      setUsersTodoList(nonDuplicatedUserIds)
    }).catch(e=>console.log(e))
  },[])

  const selectedUserId = userId=>{
    fetch(`http://127.0.0.1:5050/todos/${userId}`).then(res=>res.json()).then(data=>{
      setTodoList(data)
    }).catch(e=>console.log(e))
  }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold p-2">NodeJS Lab 2</h1>
      <hr />
      <div className="user-list flex flex-wrap gap-2 m-1">
        {usersTodoList.map(user=>(
           <div onClick={()=>selectedUserId(user.userId)} className="user-item cursor-pointer hover:bg-purple-600 p-2 bg-purple-800 text-white rounded-md" key={user.id}>
            UserID: {user.userId}
          </div>))}
      </div>
      <hr />
      <div className="todos-list flex flex-wrap gap-2 my-2 mx-1">
          {todoList.map(todo=>(
            <div className="todo-item p-2 bg-purple-800 text-white rounded-md" key={todo.id}>
              {todo.title}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
