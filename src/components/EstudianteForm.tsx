import React, {useState, useEffect} from "react"; //importamos useState y useEffect
import { Estudiante } from "../estudiante"; //importamos la interfaz de estudiante

//definimos las propiedades que recibira este componente
interface EstudianteFormProps {
    //funcion que se ejecutara cuando se envie el formulario
    onSubmit: (estudiante: Omit<Estudiante, 'id'>) => void; //propiedad onSubmit
    //datos iniciales para editar
    initialData?: Estudiante; //propiedad initialData
    //funcion que se ejecutara cuando se cancele el formulario
    onCancel: () => void; //propiedad onCancel
}

//definimos el componente EstudianteForm
const EstudianteForm: React.FC<EstudianteFormProps> = ({onSubmit, initialData, onCancel}) => {
  //estados de los campos del formulario
  const [codigo, setCodigo] = useState(initialData?.codigo || ''); //estado codigo
  const [nombre, setNombre] = useState(initialData?.nombre || ''); //estado nombre
  const [apellido, setApellido] = useState(initialData?.apellido || ''); //estado apellido
  const [email, setEmail] = useState(initialData?.email || ''); //estado email
  //hook useEffect para actualizar los estados de los campos del formulario cuando cambie la propiedad initialData
  useEffect(() => {
    if(initialData){
      setCodigo(initialData?.codigo || '');
    setNombre(initialData?.nombre || '');
    setApellido(initialData?.apellido || '');
    setEmail(initialData?.email || '');
  }else{
    setCodigo('');
    setNombre('');
    setApellido('');
    setEmail('');
  }
}, [initialData]);

}