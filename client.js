const net = require('net')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const client = new net.Socket()

client.connect(3000, '127.0.0.1', () => {
  console.log('Conectado al servidor...')
})