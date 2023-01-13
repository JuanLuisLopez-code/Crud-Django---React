import React from 'react'
import { useNavigate } from "react-router-dom";


export default function CategoriasCard({ categoria, delete_categoria }) {
    const navigate = useNavigate();


    return (
        <div>
            <p>ID: {categoria.id}</p>
            <p>Name: {categoria.name}</p>

            <button onClick={() =>
                navigate('update/' + categoria.id)
            }>Update</button>

            <button onClick={() =>
                delete_categoria(categoria.id)
            }>Borrar</button>
        </div>
    )
}