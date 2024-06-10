import React from 'react'

const Eliminar = ({ setIdEliminar, conseguirTasks, id, setTasks}) => {
    const funConfirma = (id) => {
        let task_almacenados = conseguirTasks();
        let nuevo_array_task = task_almacenados.filter( item => item.id !== parseInt(id)); 
        setTasks(nuevo_array_task);
        localStorage.setItem('tareas', JSON.stringify(nuevo_array_task));
    }

    const funRechaza = () => {
        setIdEliminar(0);
    }

    return (
        <div>
            <h3>¿Desea eliminar la tarea?</h3>

            <form className='form-eliminar'>
                <input 
                    type="button" 
                    id="confirmar"
                    onClick={ () => funConfirma(id) }
                    value="Si" />

                <input 
                    type="button" 
                    id="rechazar" 
                    onClick={ funRechaza }
                    value="No" />
            </form>
        </div>
    )
}

export default Eliminar
