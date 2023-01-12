import React from 'react'

export default function CategoriasCard({ categoria, delete_categoria }) {

    return (
        <div>
            <p>ID: {categoria.id}</p>
            <p>Name: {categoria.name}</p>
            <button onClick={() =>
                delete_categoria(categoria.id)
            }>Borrar</button>
        </div>
    )
}