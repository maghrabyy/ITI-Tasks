const express = require("express")
const cors = require("cors")

const server = express()

const PORT = 5050;

server.use(cors())

server.get("/todos",(_,res)=>{
    fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>{
        res.json(data)
    }).catch(e=>console.log(e))
})

server.get("/todos/:userid",(req,res)=>{
    const userId = req.params.userid;
    fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>{
        const userTodos = data.filter(todo=>todo.userId === parseInt(userId))
        res.json(userTodos)
    }).catch(e=>console.log(e))
})

server.get("/todos/:userid/:todoId",(req,res)=>{
    const userId = req.params.userid;
    const todoId = req.params.todoId
    fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>{
        const userTodos = data.filter(todo=>todo.userId === parseInt(userId))
        const selectedTodo = userTodos.find(todo=>todo.id === parseInt(todoId))
        res.json(selectedTodo)
    }).catch(e=>console.log(e))
})

server.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})