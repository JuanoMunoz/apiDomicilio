import express from 'express';
const app = express();
const port = 3000
import domicilioRouter from './routes/domicilio.routes.js';
app.use(express.json());
app.use('/api/v1',domicilioRouter)
app.listen(port, ()=>{
    console.log('you can see the routes on localhost:3000/api/v1/domicilio')
})