import { Router } from "express";
import domicilio from "../model/domicilio.js";
const domicilioRouter = Router()
domicilioRouter.get('/domicilio', async (req,res)=>{
    const allDomicilios = await  domicilio.find();
    res.status(200).json({
        domicilios: allDomicilios
    })
}).post('/domicilio', async (req,res)=>{
    const newDomicilio = await domicilio.create(req.body);
    res.status(201).json({
        msg: 'domicilio created successfully',
        domicilio: newDomicilio
    })
}).delete('/domicilio/:id', async (req,res)=>{
    const deletedDomicilio = await domicilio.findByIdAndDelete(req.params.id);
    res.status(200).json({
        msg: 'domicilio deleted successfully',
        domicilio: deletedDomicilio
    })
}).put('/domicilio/:id',async (req,res)=>{
    const updatedDomicilio = await domicilio.findByIdAndUpdate(req.params.id,req.body);
    res.status(200).json({
        msg: 'domicilio updated successfully',
        domicilio: updatedDomicilio
    })
})
export default domicilioRouter