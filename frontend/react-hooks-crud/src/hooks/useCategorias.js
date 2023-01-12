import { useContext, useEffect, useState, useCallback } from 'react'

import CategoriasService from '../service/CategoriasService'

export function useCategorias() {
    const [categorias, setCategorias] = useState([]);

    useEffect(function () {
        CategoriasService.getAll()
            .then(({ data }) => {
                setCategorias(data.Categorias)
            })
    }, [])

    return { categorias, setCategorias }


}