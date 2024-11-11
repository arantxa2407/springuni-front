//son las caracteristicas de un objetos, en este caso un estudiante 
//definir la interfaz de un estudiante que refleja en la entidad del backend (../model/Estudiante.java)
export interface Estudiante {
    id: number; //id del estudiante
    codigo: string; //codigo del estudiante
    nombre: string; //nombre del estudiante
    apellido: string; //apellido del estudiante
    email: string; //email del estudiante
}