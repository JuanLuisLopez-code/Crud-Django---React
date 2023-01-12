import React from 'react'

export default function CategoriasCard({ categoria }) {
    // console.log(categoria, "componente card")

    return (
        <div>
            <p>ID: {categoria.id}</p>
            <p>Name: {categoria.name}</p>
        </div>
    )
}