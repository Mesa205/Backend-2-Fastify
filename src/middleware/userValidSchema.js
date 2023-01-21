export const userValidSchema={
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

