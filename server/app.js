const express = require('express')
const cors = require('cors')
const criticaRoutes = require('./routes/critica.routes')
const comentarioRoutes = require('./routes/comentario.routes')
const notaRoutes = require('./routes/nota.routes')

const app = express()

//Settings
app.set('port', process.env.PORT || 3000)

//Middlewares
app.use(express.json())
app.use(cors({ origin: 'http://localhost:4200' }));

//Routes
app.use(criticaRoutes)
app.use(comentarioRoutes)
app.use(notaRoutes)

//Starting
function startServer() {
    app.listen(app.get('port'), () => console.log(`Servidor activo en puerto ${app.get('port')}`))
}

module.exports = {
    startServer
}