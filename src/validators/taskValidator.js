import {tasks} from '../db.js'

export default function validarTarefa(req){
    if(!req.body.task)
        throw new Error("Tarefa não informada")

    if(!req.body.task.title)
        throw new Error("Título não informado na tarefa")

    if(!req.body.task.id)
        throw new Error("ID não informado na tarefa")

    
}