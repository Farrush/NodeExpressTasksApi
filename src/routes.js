import routes from './controllers/taskController.js'

export default function (server){
    server.use(routes)
}