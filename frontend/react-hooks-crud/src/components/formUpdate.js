import React, { useEffect, useState, useCallback } from 'react'
import { set, useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

export default function FormCreate({ categorias, updateCategorias }) {

    const { register, handleSubmit, setValue } = useForm();

    useEffect(function () {
        setValue("id", categorias.id)
        setValue("name", categorias.name)
    }, [categorias])

    const getForm = (data) => {
        updateCategorias({ 'categoria': data })
    }

    return (
        <form onSubmit={handleSubmit(getForm)}>
            <input type="text" placeholder='name' {...register("name")} />
            <button>
                Send
            </button>
        </form>
    )
}