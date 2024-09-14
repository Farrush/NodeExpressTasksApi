import express from "express"
import cors from 'cors'
import addRoutes from "./routes.js"
const server = express()
server.use(cors())
server.use(express.json())

addRoutes(server)

server.listen(8080, () => console.log("Server running on port 8080"))