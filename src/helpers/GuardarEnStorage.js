const GuardarEnStorage = (key, item) => {
    //  Consigo los elementos que ya tenemos en el local storage 
    let elementos = JSON.parse(localStorage.getItem(key));

    //  Comprobar si es un array
    if ( Array.isArray(elementos)){
        //  Añadir un elemento nuevo
        elementos.push(item);
    } else {
        
        //  Crear un array con la nueva peli 
        elementos = [item];
    }

    //  Guardar en el almacenamiento local
    localStorage.setItem(key, JSON.stringify(elementos)); 

    //  Devolver objeto 
    return item;
}

export default GuardarEnStorage
