import { Router } from "express";
import domicilio from "../model/domicilio.js";
const domicilioRouter = Router()
domicilioRouter.get('/domicilio', async (req, res) => {
    const allDomicilios = await domicilio.find();
    res.status(200).json({
        domicilios: allDomicilios
    })
}).get('/domicilio/:id', async (req, res) => {
    const { id } = req.params
    const domicilioFinded = await domicilio.findOne({ idPedido: id });
    res.status(200).json({
        domicilio: domicilioFinded
    })
}).post('/domicilio', async (req, res) => {
    try {
        const newDomicilio = await domicilio.create(req.body);
        res.status(201).json({
            msg: 'domicilio created successfully',
            domicilio: newDomicilio
        })
    } catch (e) {
        res.status(401).json({ errors: e })
    }
}).delete('/domicilio/:id', async (req, res) => {
    const { id } = req.params
    const deletedDomicilio = await domicilio.findOneAndDelete({ idPedido: id });
    res.status(200).json({
        msg: 'domicilio deleted successfully',
        domicilio: deletedDomicilio
    })
}).put('/domicilio/:id', async (req, res) => {
    const { id } = req.params
    const findDomicilio = await domicilio.findOneAndUpdate({ idPedido: id }, req.body);
    res.status(200).json({
        msg: 'domicilio updated successfully',
        domicilio: findDomicilio
    })
})
export default domicilioRouter