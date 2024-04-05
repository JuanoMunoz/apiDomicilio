import { Schema, model} from 'mongoose'

const domicilioSchema = new Schema({
    idDomicilio: {
        type: Number,
        required: true,
        unique: true
    },
    novedades: {
        type: String,
        required: true
    },
    idEstado: {
        type: Number,
        required: true,
        unique: true
    },
    idPedido: {
        type: Number,
        required: true,
        unique: true,
    },

})

export default model('Domicilio',domicilioSchema);