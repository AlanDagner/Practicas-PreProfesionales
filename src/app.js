import express from 'express'
import morgan from 'morgan'

import documentoRoutes from './routes/documento.routes'
import personaRoutes from './routes/persona.routes'
import solicitudRoutes from './routes/solicitud.routes'
import estudianteRoutes from './routes/estudiante.routes'


const app=express();
var cors=require('cors');
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

app.get('/',(req,res)=>{
    res.send('Bienvenido a Node JS...!');

});

app.use('/api/auth/documento', documentoRoutes);
app.use('/api/auth/persona', personaRoutes);
app.use('/api/auth/solicitud', solicitudRoutes);
app.use('/api/auth/estudiante', estudianteRoutes);

export default app;