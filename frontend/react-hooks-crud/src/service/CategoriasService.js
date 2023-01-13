import http from "./http-common";

const getAll = () => {
  return http.get("/categoria");
};

const getOne = (id) => {
  return http.get("/categoria/" + id);
};

const createCategorias = (data) => {
  return http.post("/categoria", data);
};

const updateCategorias = (data) => {
  return http.put("/categoria/" + data.categoria.id, data);
};

const deleteOne = (id) => {
  return http.delete("/categoria/" + id);
};

const CategoriasService = {
  getAll,
  deleteOne,
  createCategorias,
  updateCategorias,
  getOne
};

export default CategoriasService;
