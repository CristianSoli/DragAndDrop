import React, { useEffect, useState } from 'react'
import FormNuevoTask from './FormNuevoTask';
import GuardarEnStorage from '../helpers/GuardarEnStorage';

const Cards = ({task, setTasks, l, e, clases, name, draggingOver, onDrop, getList, startDrag}) => {

    //  Hook para abrir ventana de edicion
    const [ showForm, setShowForm ] = useState(false);

    // Hook para crear nuevo objeto en el arreglo
    const [ carta, setCarta ] = useState({
        title: '',
        body: ''
    });

    const { title, body } = carta; 

    useEffect(() => {
        console.log("Componente de listado de cargar peliculas")

        conseguirTasks();

    }, []);

    const conseguirTasks = () => {
        let tareas = JSON.parse(localStorage.getItem("tareas"));

        setTasks(tareas);

        return tareas;
    };

    const conseguirDatosForm = function(e) {
        e.preventDefault();

        //  Conseguir datos  del formulario 
        let target = e.target;
        let title = target.title.value;
        let body = target.body.value;

        //  Crear un objeto de la tarea a guardar 
        let task = {
            id: new Date().getTime(),
            title,
            body,
            list: 1
        }

        //  Guarda estado 
        setCarta(task);

        //  Actualizar el estado del listado principal
        setTasks(elementos => {
            return[task, ...elementos];
        })

        //  Guardar en el almacenamiento local
        GuardarEnStorage('tareas', task);

        setShowForm(false)
    }

    const abrirFormulario = () => {
        if(!showForm)
            setShowForm(true);
        else
            setShowForm(false);
    };

    return (
        <div className={ clases }>
            <h3>
                { name }
            </h3>


            <div className='dd-zone' droppable="true" onDragOver={(evt => draggingOver(evt))} onDrop={(evt => onDrop(evt,  e ))}>
                {getList(l).map(item => (
                    <div className='dd-element' key={item.id} draggable onDragStart={(evt) => startDrag(evt, item)}>
                        <strong className='title'>{item.title}</strong>
                        <p className='body'>{item.body}</p>
                    </div>
                ))}

                { ( l === 1  ) && ((
                    <div>
                        {console.log(showForm)}
                        <button className="btn-nuevo" onClick={ abrirFormulario }>Nueva tarea</button>
                        { (showForm) && <FormNuevoTask conseguirDatosForm={ conseguirDatosForm } />}
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Cards
