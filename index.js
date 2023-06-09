const jsonServer=require("json-server")
const server=jsonServer.create()
const cors = require("cors");
const router=jsonServer.router("db.json")
const middleware=jsonServer.defaults()

server.use(middleware)
server.use(router)
server.use(cors)


server.listen(1030, ()=>{
    console.log("Port is running on: http://localhost:1010/");
})