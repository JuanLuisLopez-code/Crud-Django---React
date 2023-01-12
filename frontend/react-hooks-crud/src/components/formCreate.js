import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";

export default function FormCreate({ createCategorias }) {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const getForm = (data) => {
        createCategorias({ 'categoria': data })
    }

    return (
        <form onSubmit={handleSubmit(getForm)}>
            <input type="text" placeholder='name' {...register("name")} />
            <button onClick={() => navigate('/')}>
                Send
            </button>
        </form>
    )
}