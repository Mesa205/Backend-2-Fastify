
import { response } from "../helpers/Response.js"
import { empleadoModel } from "../models/empleado.model.js"







const empleadoCtrl={}

empleadoCtrl.listar= async(req,reply)=>{
    try {
        const empleados = await empleadoModel.find()
        response(reply, 200, true, empleados, "lista de empleados")

    } catch (error) {

        response(reply, 500, false, "", error.message)


        // res.status(500).json({
        //     ok: false,
        //     data:"",
        //     message: error.message
        // })
    }
}

empleadoCtrl.listById= async(req, reply)=>{
    try {
        const {id} = req.params;
        const empleado=await empleadoModel.findById(id);

        if(!empleado){
            return response(reply,404, false, "", "registro no encontrado")
        }
        response ( reply, 200, true, empleado, "empleado encontrado")


    } catch (error) {
        response(reply, 500, false, "", error.message)
    }
}


empleadoCtrl.guardar = async (req,reply) =>{
    try{
        const { nombres, apellidos, correo, salario, edad, cargo } = req.body;

        const newEmpleado = new empleadoModel ({
            nombres, apellidos, correo, salario, edad, cargo
        });

        await newEmpleado.save()
        response(reply, 201, true, newEmpleado, "empleado creado")
    } catch (error) {
        response (res, 500, false, "", error.message)
    }
};

empleadoCtrl.actualizar = async (req, reply) => {
    try {
      const { id } = req.params;
      const { correo } = req.body;
      // await empleadoModel.findByIdAndUpdate({_id:id}, req.body);
      const empleado = await empleadoModel.findById(id);
      if (!empleado) {
        return response(reply, 404, false, "", "registro no encontrado");
      }
  
      if (empleado.correo !== correo) {
        const empleadoCorreo = await empleadoModel.findOne({ correo });
        if (empleadoCorreo) {
          return response(
            reply,
            400,
            false,
            "",
            `el correo ${correo} ya existe en otro registro`
          );
        }
      }
      await empleado.updateOne(req.body);
      response(reply, 200, true, "", "registro actualizado");
    } catch (error) {
      response(reply, 500, false, "", error.message);
    }
  };
  

  
  empleadoCtrl.eliminar = async (req, reply) => {
    try {
      const { id } = req.params;
      const empleado = await empleadoModel.findById(id);
      if (!empleado) {
        return response(reply, 404, false, "", "registro no encontrado");
      }
      await empleado.deleteOne();
      response(reply, 200, true, "", "empleado eliminado");
    } catch (error) {
      response(reply, 500, false, "", error.message);
    }
  };

export default empleadoCtrl