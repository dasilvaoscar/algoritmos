import express from "express";

import { LinkedList } from './linked-list'
 
const server = express();
server.use(express.json())

const list = new LinkedList<string>()

server.get('/users', (_req, res) => {
  res.send({ length: list.length })
})

server.post('/users', (req, res) => {
  list.push(req.body.name as string)
  res.sendStatus(201)
})

server.listen(8000, () => console.log("Server running!"));
