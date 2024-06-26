import express from 'express';
import './database.js'
const app = express();
const port = 3000
import domicilioRouter from './routes/domicilio.routes.js';
app.use(express.json());
app.get('/', (req, res) => {
    res.redirect('/api/v1/domicilio')
})
app.use('/api/v1', domicilioRouter)
app.listen(port, () => {
    console.log('you can see the routes on localhost:3000/api/v1/domicilio')
})