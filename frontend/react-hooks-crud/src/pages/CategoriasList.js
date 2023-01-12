import React, { useState, useEffect } from "react";
import { useCategorias } from "../hooks/useCategorias";
import { Link } from "react-router-dom";
import CategoriasCard from "../components/CategoriasCard";

const CategoriasList = () => {
    const { categorias } = useCategorias();
    console.log(categorias, "view")
    console.log(categorias.length, "cantidad")

    const trymap = categorias.length > 0 ? categorias.map(categoria =>
                <CategoriasCard categoria={categoria} key={categoria.id}></CategoriasCard>
    ) : <p>No data</p>

    return (
        <div>
            {trymap}
        </div>
    );
};

export default CategoriasList;