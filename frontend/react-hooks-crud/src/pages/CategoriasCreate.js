import React, { useState, useEffect } from "react";
import { useCategorias } from "../hooks/useCategorias";
import { Link } from "react-router-dom";
import FormCreate from "../components/formCreate";

const CategoriasCreate = () => {
    const { createCategorias } = useCategorias();

    return (
        <div>
            <FormCreate createCategorias={createCategorias}></FormCreate>
        </div>
    );
};

export default CategoriasCreate;