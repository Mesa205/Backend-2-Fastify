

import empleadoCtrl from '../controllers/empleado.controller.js';
import { userValidSchema } from '../middleware/userValidSchema.js';

import { seedDt } from '../seed/seedDb.js';


  



const route = (fastify, opts, done) => {

    fastify.get("/seed", seedDt);

    fastify.get('/', empleadoCtrl.listar);
    fastify.get('/:id', empleadoCtrl.listById);



    fastify.put('/:id', empleadoCtrl.actualizar);
    fastify.delete('/:id', empleadoCtrl.eliminar);

    fastify.post('/',

   {
        schema: userValidSchema

    },

    empleadoCtrl.guardar);

    done();
}





export default route;

