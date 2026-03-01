import { Server } from "socket.io";

async function initSocket(httpServer) {
  const io = new Server(httpServer, {});


  io.on("connection" , (socket) => {
    console.log(`client connected to ${socket.id}`);


    socket.on("disconnect" , (socket) => {
         console.log(` client disconnected to ${socket.id}`);
    })
  })

}

export default initSocket;
