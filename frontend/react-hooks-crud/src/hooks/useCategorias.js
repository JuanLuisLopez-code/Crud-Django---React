import { useEffect, useState, useCallback } from 'react'

import CategoriasService from '../service/CategoriasService'

export function useCategorias() {
    const [categorias, setCategorias] = useState([]);

    useEffect(function () {
        CategoriasService.getAll()
            .then(({ data }) => {
                setCategorias(data.Categorias);
            })
    }, [])


    const delete_categoria = ((id) => {
        CategoriasService.deleteOne(id);
        setCategorias(categorias.filter(categoria => categoria.id !== id));
    })


    return { categorias, setCategorias, delete_categoria }


}