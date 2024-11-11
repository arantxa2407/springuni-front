import React, { useState, useEffect } from "react"; //importamos useState y useEffect
import { Estudiante } from "../estudiante"; //importamos la interfaz de estudiante

//definimos las propiedades que recibira este componente
interface EstudianteFormProps {
  //funcion que se ejecutara cuando se envie el formulario
  onSubmit: (estudiante: Omit<Estudiante, "id">) => void; //propiedad onSubmit
  //datos iniciales para editar
  initialData?: Estudiante; //propiedad initialData
  //funcion que se ejecutara cuando se cancele el formulario
  onCancel: () => void; //propiedad onCancel
}

//definimos el componente EstudianteForm
const EstudianteForm: React.FC<EstudianteFormProps> = ({
  onSubmit,
  initialData,
  onCancel,
}) => {
  //estados de los campos del formulario
  const [codigo, setCodigo] = useState(initialData?.codigo || ""); //estado codigo
  const [nombre, setNombre] = useState(initialData?.nombre || ""); //estado nombre
  const [apellido, setApellido] = useState(initialData?.apellido || ""); //estado apellido
  const [email, setEmail] = useState(initialData?.email || ""); //estado email
  //hook useEffect para actualizar los estados de los campos del formulario cuando cambie la propiedad initialData
  useEffect(() => {
    if (initialData) {
      setCodigo(initialData?.codigo || "");
      setNombre(initialData?.nombre || "");
      setApellido(initialData?.apellido || "");
      setEmail(initialData?.email || "");
    } else {
      setCodigo("");
      setNombre("");
      setApellido("");
      setEmail("");
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    //prevenir el comportamiento por defecto del formulario
    e.preventDefault();
    //llamar a la funcion onSubmit con los datos del formulario
    onSubmit({ codigo, nombre, apellido, email });
    //si no se esta editando
    //limpiar los campos del formulario despues de enviar
    if (!initialData) {
      setCodigo("");
      setNombre("");
      setApellido("");
      setEmail("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      {/*titulo del formulario que cambia segun si se esta editando o creando */}
      <h2>{initialData ? "Editar estudiante" : "Crear estudiante"}</h2>
      {/*campo codigo */}
      <input
        type="text"
        placeholder="Codigo"
        value={codigo}
        //actualizar el estado codigo cuando cambie el campo
        onChange={(e) => setCodigo(e.target.value)}
        required //campo requerido
        style={{
          marginRight: "10px",
          marginBottom: "10px",
          padding: "8px, 5px",
          width: "200px",
        }}
      />
      {/*campo nombre */}
      <input
        type="text"
        placeholder="Nombre"
        value={nombre}
        //actualizar el estado nombre cuando cambie el campo
        onChange={(e) => setNombre(e.target.value)}
        required //campo requerido
        style={{
          marginRight: "10px",
          marginBottom: "10px",
          padding: "8px, 5px",
          width: "200px",
        }}
      />
      {/*campo apellido */}
      <input
        type="text"
        placeholder="Apellido"
        value={apellido}
        //actualizar el estado apellido cuando cambie el campo
        onChange={(e) => setApellido(e.target.value)}
        required //campo requerido
        style={{
          marginRight: "10px",
          marginBottom: "10px",
          padding: "8px, 5px",
          width: "200px",
        }}
      />
      {/*campo email */}
      <input
        type="email"
        placeholder="Email"
        value={email}
        //actualizar el estado email cuando cambie el campo
        onChange={(e) => setEmail(e.target.value)}
        required //campo requerido
        style={{
          marginRight: "10px",
          marginBottom: "10px",
          padding: "8px, 5px",
          width: "200px",
        }}
      />
      {/*boton enviar */}
      <button
        type="submit"
        style={{ marginRight: "10px", padding: "8px, 5px" }}
      >
        {initialData ? "Editar estudiante" : "Crear Estudiante"}
      </button>
      {/*boton cancelar */}
      {initialData && onCancel && (
        <button
          type="button"
          onClick={onCancel}
          style={{ padding: "8px, 5px" }}
        >
          Cancelar
        </button>
      )}
    </form>
  );
};

export default EstudianteForm; //exportamos el componente EstudianteForm