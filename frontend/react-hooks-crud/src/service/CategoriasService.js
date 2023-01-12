import http from "./http-common";

const getAll = () => {
  return http.get("/categoria");
};

const createCategorias = (data) => {
  return http.post("/categoria", data);
};

const deleteOne = (id) => {
  return http.delete("/categoria/" + id);
};

const CategoriasService = {
  getAll,
  deleteOne,
  createCategorias,
};

export default CategoriasService;
