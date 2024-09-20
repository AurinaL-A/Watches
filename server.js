const express = require("express");
const { request } = require("http");
const PORT = 3004;
const app = express();
const mongoose = require("mongoose");
const ToDo = require("./models/TodoModel");
require("dotenv").config();
const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@90.156.216.12/MongoDBMidis`

mongoose
    .connect(uri)
    .then(() => {
        console.log("Connected to MongoDBMidis!");
        app.listen(PORT, () => {
            console.log(`сервер запущен на порту ${PORT}`);
        });
    })
    .catch((err) => console.error("An error occurred", err));

app.use(express.json());
app.post("/createTask", async (reg, res) => {
    try {
        const task = await ToDo.create(reg.body);
        res.status(200).json(task);
    } catch (error) {
        console.log(error.message);
        res.status(500);
    }
});
app.get("/getAllTasks", async (reg, res) => {
    try {
        const { id } = reg.params;
        const tasks = await ToDo.find({});
        res.status(200).json(tasks);
    } catch (error) {
        console.log(error.message);
        res.status(500);
    }
})
app.put("/updateTask/:id", async (reg, res) => {
    try {
        const { id } = reg.params;
        const task = await ToDo.findByIdAndUpdate(id, reg.body, { new: true });
        if (!task) {
            return res.status(404).send("Задача с таким id не найдена");
        }
        res.status(200).json(task);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("ошибка при обновлении задачи");
    }
});
app.delete("/deleteTask/:id",async(reg,res)=>{
    try{
        const { id } = reg.params;
        const task = await ToDo.findByIdAndDelete(id);
        if(!task){
            return res.status(404).send("Задача с таким id не найдена");
        }
        res.status(200).send(`Задача с ID ${id} удалена` );
    }catch(error){
        console.log(error.message);
        res.status(500).send("ошибка при удалении задачи");
    }
});