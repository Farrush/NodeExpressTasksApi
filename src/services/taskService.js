import {tasks} from '../db.js'

export function deletarTarefa(req) {
    let id = Number(req.params.id)
    let index = tasks.findIndex((t) => t.id === id)
    let deletedTask = tasks[index]
    tasks.splice(index, 1)
    return deletedTask
}

export function alterarTarefa(req) {
    let altT = req.body.task
    let id = Number(req.params.id)
    let index = tasks.findIndex((t) => t.id == id)
    tasks[index] = altT
    return altT
}

export function inserirTarefa(req) {
    let newT = req.body.task
    tasks.push(newT)
    return newT
}

export function buscarTarefas(){
    return tasks
}

export function buscarTarefaPorId(req){
    return tasks.filter(t => t.id === Number(req.params.id)).pop()
}