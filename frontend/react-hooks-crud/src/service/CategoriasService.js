import http from "./http-common";

const getAll = () => {
  return http.get("/categoria");
};

const deleteOne = (id) => {
  return http.delete("/categoria/" + id);
};

const CategoriasService = {
  getAll,
  deleteOne,
};

export default CategoriasService;
