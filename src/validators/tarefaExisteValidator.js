import { tasks } from "../db.js";

export default function tarefaExistente(req){
    let id = Number(req.body.task.id)
    if(req.params.id){
        if(Number(req.params.id) === id){
            return
        }
    }
    if(tasks.findIndex(t => t.id === id) !== -1){
        throw new Error("Tarefa Existente")
    }
}