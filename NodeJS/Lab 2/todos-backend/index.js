const express = require("express")
const cors = require("cors");
const e = require("express");

const server = express()

const PORT = 5050;

server.use(cors())

server.get("/todos",(_,res)=>{
    fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>{
        res.status(200).json(data)
    }).catch(e=>res.status(500).send(e.message))
})

server.get("/todos/:userid",(req,res)=>{
    const userId = req.params.userid;
    fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>{
        const userTodos = data.filter(todo=>todo.userId === parseInt(userId))
        if(userTodos.length > 0){
            res.status(200).json(userTodos)
        }else{
            res.status(404).send("Invalid userId")
        }
    }).catch(e=>res.status(500).send(e.message))
})

server.get("/todos/:userid/:todoId",(req,res)=>{
    const userId = req.params.userid;
    const todoId = req.params.todoId
    fetch("https://jsonplaceholder.typicode.com/todos").then(res=>res.json()).then(data=>{
        const userTodos = data.filter(todo=>todo.userId === parseInt(userId))
        const selectedTodo = userTodos.find(todo=>todo.id === parseInt(todoId))
        if(selectedTodo){
            res.status(200).json(selectedTodo)
        }else{
            res.status(404).send("Invalid todoId")
        }
    }).catch(e=>res.status(500).send(e.message))
})

server.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
})