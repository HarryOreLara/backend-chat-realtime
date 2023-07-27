const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http, {
    cors:{
        origin: true,
        credentials: true,
        methods: ["GET", "POST"]
    }
});


io.on('connection', (socket)=>{
    console.log("Nuevo usuario conectado");

    //-----SOCKET DE PRUBEA, PUEDE SERVIR LUEGO PARA LAS DEPURACIONES

    // socket.on("test", (objeto)=>{
    //     console.log("Evento Test con texto: "+objeto.text);
    //     socket.emit("test2", objeto);
    // });



    //----CODIGO PARA IMPLEMENTAR
    socket.on("sendMessage", (messageInfo)=>{
        console.log("Enviando un mensaje");
        socket.broadcast.emit("reciveMessage", messageInfo);
    });
});



app.get('/', (req, res)=>{
    res.send('<h1>Hola mundo</h1>')
});


http.listen(3000, ()=>{
    console.log("Escuchando el puerto 3000");
});