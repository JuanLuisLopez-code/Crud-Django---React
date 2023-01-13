import React from 'react'
import { useForm } from 'react-hook-form';

export default function FormCreate({ createCategorias }) {

    const { register, handleSubmit } = useForm();
    const getForm = (data) => {
        createCategorias({ 'categoria': data })
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