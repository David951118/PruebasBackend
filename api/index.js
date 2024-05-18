const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
// Configuración de CORS
const whitelist = ['http://localhost:3000', 'https://www.asegurar.com.co'];

const corsOptions = {
  origin: function (origin, callback) {
    // Permitir solicitudes sin el encabezado Origin (como las de Postman)
    if (!origin || whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Acceso no permitido'));
    }
  },
};

// Usar CORS con las opciones configuradas
app.use(cors(corsOptions));

app.get('/api', (req, res) => {
  res.send('Hola mi server en express');
});

app.get('/api/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('port' + port);
});
