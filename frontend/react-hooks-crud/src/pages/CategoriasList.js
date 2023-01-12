import React, { useState, useEffect } from "react";
import { useCategorias } from "../hooks/useCategorias";
import { useNavigate } from "react-router-dom";

import CategoriasCard from "../components/CategoriasCard";

const CategoriasList = () => {
    const { categorias, delete_categoria } = useCategorias();
    const navigate = useNavigate();

    const trymap = categorias.length > 0 ? categorias.map(categoria =>
        <CategoriasCard categoria={categoria} key={categoria.id} delete_categoria={delete_categoria}></CategoriasCard>
    ) : <p>No data</p>

    return (
        <div>
            <button onClick={()=>navigate('create')}>
                Create
            </button>
            {trymap}
        </div>
    );
};

export default CategoriasList;