import { Router } from "express"
import validarTarefa from "../validators/taskValidator.js"
import validarId from "../validators/IdValidator.js"
import * as taskService from '../services/taskService.js'
import tarefaInexistente from "../validators/tarefaNaoExisteValidator.js"
import tarefaExistente from "../validators/tarefaExisteValidator.js"

const endpoints = Router()

endpoints.get('/task', (req, res) => {
    try {
        res.status(200).send({ tarefas: taskService.buscarTarefas() })
    }
    catch (err) {
        res.status(400).send({ erro: err.message })
    }
})
endpoints.get('/task/:id', (req, res) => {
    try{
        validarId(req)
        tarefaInexistente(req)
        
        res.status(200).send({ tarefa: taskService.buscarTarefaPorId(req) })
    }catch(err){
        res.status(400).send({ erro: err.message })
    }
})

endpoints.post('/task/add', (req, res) => {
    try {
        validarTarefa(req)
        tarefaExistente(req)

        let newT = taskService.inserirTarefa(req)
        res.status(200).send({ tarefa: newT })
    }
    catch (err) {
        res.status(400).send({ erro: err.message })
    }
})

endpoints.put('/task/:id', (req, res) => {
    try {
        validarId(req)
        validarTarefa(req)
        tarefaInexistente(req)
        tarefaExistente(req)
        
        let altT = taskService.alterarTarefa(req)
        res.status(200).send({ tarefa: altT })
    }
    catch (err) {
        res.status(400).send({ erro: err.message })
    }
})

endpoints.delete('/task/:id', (req, res) => {
    try {
        validarId(req)
        tarefaInexistente(req)

        let deletedTask = taskService.deletarTarefa(req)

        res.status(200).send({ tarefa: deletedTask })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ erro: err.message })
    }
})

export default endpoints