
# Chat CLI con Node.js

Este es un proyecto simple de un sistema de chat basado en línea de comandos, implementado en Node.js. Permite a múltiples clientes conectarse a un servidor y enviar mensajes entre ellos en tiempo real.

## Características

- **Servidor**: Maneja múltiples conexiones de clientes simultáneamente y retransmite mensajes de un cliente a todos los demás.
- **Cliente**: Permite a los usuarios enviar y recibir mensajes a través de la línea de comandos.
- **Sincronización**: Los mensajes enviados por un cliente son visibles en tiempo real para todos los demás clientes conectados.
- **Manejo de errores**: Detecta y gestiona desconexiones inesperadas de los clientes.

## Requisitos previos

- Node.js (versión 14 o superior) instalado en tu sistema.

## Archivos principales

1. **`server.js`**: Contiene la lógica del servidor que:
   - Escucha conexiones entrantes en el puerto `3000`.
   - Solicita el nombre de usuario de cada cliente.
   - Retransmite los mensajes recibidos a todos los demás clientes.
   - Maneja desconexiones y errores inesperados.

2. **`client.js`**: Contiene la lógica del cliente que:
   - Se conecta al servidor en la dirección `127.0.0.1:3000`.
   - Permite al usuario enviar mensajes desde la terminal.
   - Muestra en la consola los mensajes recibidos del servidor.

## Instrucciones de uso

### 1. Clonar el repositorio
```bash
git clone https://github.com/jclentino/chat-example/tree/main
cd chat-example
```

### 2. Ejecutar el servidor
Ejecuta el servidor en una terminal:  
```bash
node server.js
```
El servidor comenzará a escuchar conexiones en el puerto `3000`.

### 3. Ejecutar el cliente
Ejecuta el cliente en una terminal separada:  
```bash
node client.js
```
Puedes iniciar múltiples instancias del cliente para simular varios usuarios.

### 4. Enviar mensajes
- Al conectarte, el cliente te pedirá un nombre de usuario.
- Escribe cualquier mensaje en la terminal y presiona Enter para enviarlo.
- Los mensajes se retransmitirán a todos los demás clientes conectados.

## Ejemplo de uso

1. **Servidor**:
   ```
   Servidor escuchando en el puerto 3000
   ¡Usuario1 se ha conectado!
   Usuario1: Hola a todos
   ```

2. **Cliente 1**:
   ```
   Conectado al servidor...
   Ingresa tu nombre de usuario: Usuario1
   Usuario1: Hola a todos
   ```

3. **Cliente 2**:
   ```
   Conectado al servidor...
   Ingresa tu nombre de usuario: Usuario2
   Usuario1: Hola a todos
   ```

## Notas

- El servidor y los clientes deben ejecutarse en la misma máquina para usar `127.0.0.1`. Si deseas utilizar una red, cambia la dirección IP en el cliente por la IP de la máquina que ejecuta el servidor.
- Maneja errores de desconexión automáticamente para evitar caídas del servidor.

## Licencia

Este proyecto está disponible bajo la licencia MIT. ¡Siéntete libre de usarlo y mejorarlo!

