const net = require('net')
const clients = []

const server = net.createServer((socket) => {
    socket.write('Ingresa tu nombre de usuario: ')

    socket.on('data', (data) => {
        if (!socket.username) {
            socket.username = data.toString().trim()
            console.log(`¡${socket.username} se ha conectado!`)
            socket.write(`Bienvenido al chat, ${socket.username}!\n`)
        } else {
            const message = `${socket.username}: ${data.toString()}`
            console.log(message)
            clients.forEach((client) => {
                if (client !== socket) {
                    client.write(message)
                }
            })
        }
    })

    clients.push(socket)
})

const PORT = 3000
server.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
