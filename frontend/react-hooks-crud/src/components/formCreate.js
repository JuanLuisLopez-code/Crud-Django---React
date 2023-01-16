import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export default function FormCreate({ createCategorias }) {

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('name is required')
            .min(6, 'name must be at least 6 characters')
            .max(20, 'name must not exceed 20 characters'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema)
    });
    const getForm = (data) => {
        createCategorias({ 'categoria': data })
    }

    return (
        <form onSubmit={handleSubmit(getForm)}>
            <input name="name" type="text" placeholder='name' {...register("name")} className={`form-control ${errors.name ? 'is-invalid' : ''}`} />
            <button>
                Send
            </button>
            <div className="invalid-feedback">{errors.name?.message}</div>
        </form>
    )
}