import mongoose from "mongoose";

const{Schema, model}= mongoose;

const empleadoSchema=new Schema({
    nombres:{
        type: String,
        required:[true, " el campo es requerido"],
    },
    apellidos: {
        type: String,
        default: "",
    },

    correo:{
        type: String, 
        unique: true,
        required: [true, "el campo es requerido"]
    },
    edad:{
        type: Number, 
        unique: true,
        required: [true, "el campo edad es requerido"]
    },
    salario:{
        type: Number, 
        unique: true,
        required: [true, "el campo es requerido"]
    },
    cargo:{
        type: String, 
        unique: true,
        required: [true, "el campo  es requerido"]
    },

    

},
{
    timestamps: true,
})

export const empleadoModel=model("empleado", empleadoSchema);