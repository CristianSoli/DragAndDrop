import React from 'react'

const FormNuevoTask = ({conseguirDatosForm}) => {
    return (
        <>
            <form className='edit_form' onSubmit={ conseguirDatosForm }>
                <input 
                    type="text" 
                    id="title" 
                    name='title'
                    placeholder="Tarea" />

                <textarea  
                    id="description" 
                    name='body'
                    placeholder="Descripción">
                </textarea>

                <input 
                    type="submit" 
                    id="save" 
                    value="Guardar" />
            </form>
        </>
    )
}

export default FormNuevoTask
