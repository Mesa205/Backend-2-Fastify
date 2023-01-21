
import empleadoCtrl from '../controllers/empleado.controller.js';

import { seedDt } from "../seed/seedDb.js";


const userValidSchema={
  body:{
    type: "object",
    required:["nombres", "apellidos", "correo","edad", "salario", "cargo" ],
    properties:{
      nombres:{
        type:"string",
        minLength: 1,
      },
      apellidos:{
        type:"string",
        minLength: 4,
        maxLength: 50
      },
      correo:{
        type:"string",
        format: "email",
      },
      edad:{
        type:"number",
      },
      salario:{
        type:"number",
      },
      cargo:{
        type:"string",
        minLength: 1,
      },
    },
  },

}




const route=(fastify,opts,done)=>{

fastify.get('/', empleadoCtrl.listar);
fastify.get('/:id', empleadoCtrl.listById);
fastify.get("/seed",seedDt)

fastify.put("/:id", empleadoCtrl.actualizar);
fastify.delete("/:id", empleadoCtrl.eliminar);

fastify.post(
    "/",{
       schema: userValidSchema
    
    },
    empleadoCtrl.guardar
   
  );


   
    

  done();
}
export default route;

