import React, { useState, useEffect } from "react";
import { useCategoriasOne } from "../hooks/useCategorias";
import { Link } from "react-router-dom";
import FormCreate from "../components/formCreate";
import { useParams } from "react-router-dom";
import FormUpdate from "../components/formUpdate";


const CategoriasUpdate = () => {
    const { id } = useParams();
    const { categorias, updateCategorias } = useCategoriasOne(id);

    return (
        <div>
            <FormUpdate categorias={categorias} key={categorias.id} updateCategorias={updateCategorias}>
            </FormUpdate>
        </div>
    );
};

export default CategoriasUpdate;