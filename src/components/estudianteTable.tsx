//src/components/estudianteTable.tsx
import React from 'react';
import { Estudiante } from '../estudiante';

//definimos las propiedades que recibira este componente
interface EstudianteTableProps {
    //arreglo de estudiantes
    estudiantes: Estudiante[]; 
    //funcion que se ejecutara cuando se elimine un estudiante
    onDelete: (id: number) => void;
    //funcion que se ejecutara cuando se edite un estudiante
    onEdit: (estudiante: Estudiante) => void;
}

//definimos el componente EstudianteTable
const EstudianteTable: React.FC<EstudianteTableProps> = ({ estudiantes, onDelete, onEdit }) => {
    return (
        <table
        cellPadding={0}
        cellSpacing={0}
        style={{ width: '100%', textAlign: 'center' }}
        >
            <thead>
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Email</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {/*mapeamos los estudiantes para mostrarlos en la tabla */}
                {estudiantes.map((estudiante) => (
                    <tr key={estudiante.id}>
                      {/*mostramos los datos del estudiante */}
                        <td>{estudiante.id}</td>
                        <td>{estudiante.codigo}</td>
                        <td>{estudiante.nombre}</td>
                        <td>{estudiante.apellido}</td>
                        <td>{estudiante.email}</td>
                        <td>
                            {/*boton para editar */}
                            <button onClick={() => onEdit(estudiante)}>Editar</button>
                            {/*boton para eliminar */}
                            <button onClick={() => onDelete(estudiante.id)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
export default EstudianteTable;