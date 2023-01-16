import { useEffect, useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";


import CategoriasService from '../service/CategoriasService'

export function useCategorias() {
    const [categorias, setCategorias] = useState([]);
    const navigate = useNavigate();

    useEffect(function () {
        CategoriasService.getAll()
            .then(({ data }) => {
                setCategorias(data.Categorias);
            })
    }, [])

    const createCategorias = ((data_create) => {
        CategoriasService.createCategorias(data_create)
            .then(() => {
                navigate('/')
            })
    })


    const delete_categoria = ((id) => {
        CategoriasService.deleteOne(id);
        toast.success('Article deleted');
        setCategorias(categorias.filter(categoria => categoria.id !== id));
    })


    return { categorias, setCategorias, delete_categoria, createCategorias }
}

export function useCategoriasOne(id) {

    const [categorias, setCategorias] = useState([]);
    const navigate = useNavigate();

    useEffect(function () {
        CategoriasService.getOne(id)
            .then(({ data }) => {
                setCategorias(data.Categorias);
            })
    }, [])

    const updateCategorias = ((data_create) => {
        CategoriasService.updateCategorias(data_create)
            .then(() => {
                navigate('/')
            })
    })
    return { categorias, setCategorias, updateCategorias }
}