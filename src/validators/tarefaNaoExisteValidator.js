import { tasks } from "../db.js";

export default function tarefaInexistente(req){
    let id = Number(req.params.id)
    if(tasks.findIndex(t => t.id === id) === -1){
        throw new Error("Tarefa inexistente")
    }
}