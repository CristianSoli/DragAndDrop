import React, { useEffect } from 'react';
import { useState } from 'react';
import Cards from './components/Cards';

function App()  {


    const [ tasks, setTasks ] = useState([]);

    const getList = (list) => {
        return tasks.filter(item => item.list === list)
    }

    useEffect(() => {
        localStorage.setItem('tareas', JSON.stringify(tasks));
    }, [tasks]);

    const startDrag = (evt, item) => {
        evt.dataTransfer.setData('itemID', item.id)
    }

    const draggingOver = (evt) => {
        evt.preventDefault();
    }

    const onDrop = (evt, list) => {
        const itemID = evt.dataTransfer.getData('itemID');
        const item = tasks.find(item => item.id == itemID);
        item.list = list;

        const newState = tasks.map(task => {
            if(task.id === itemID) return item;
            return task
        })

        setTasks(newState);
    }

    return (
        <>
            <h1>
                Tareas &nbsp;
            </h1>
            <br/>

            <div className='drag-and-drop'>

                <Cards tasks={ tasks } setTasks={ setTasks } l={1} e={1} clases='column column--1' name="Tareas por hacer" draggingOver={ draggingOver } onDrop={ onDrop } getList={ getList } startDrag= { startDrag }/>
                <Cards tasks={ tasks } setTasks={ setTasks } l={2} e={2} clases='column column--2' name="Tareas en progreso" draggingOver={ draggingOver } onDrop={ onDrop } getList={ getList } startDrag= { startDrag }/>
                <Cards tasks={ tasks } setTasks={ setTasks } l={3} e={3} clases='column column--3' name="Tareas en revision" draggingOver={ draggingOver } onDrop={ onDrop } getList={ getList } startDrag= { startDrag }/>
                <Cards tasks={ tasks } setTasks={ setTasks } l={4} e={4} clases='column column--4' name="Tareas realizadas" draggingOver={ draggingOver } onDrop={ onDrop } getList={ getList } startDrag= { startDrag }/>
            
            </div>
        </>
    )
}

export default App;